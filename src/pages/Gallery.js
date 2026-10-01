import React, { useEffect, useState, useCallback, useRef } from 'react';
import './Galleryevent.css';
import { Helmet } from 'react-helmet';

/* Paste a NEW Google API key here (restrict it to your domain + Drive API only).
   Thumbnails work without it, but folder-based events and full-size images need it. */
const API_KEY = 'AIzaSyBKQ7QWwRZYE9Z9GTd9oHgTynpR8P1Q0bw';

/* =====================================================
   EVENTS
   name   : title shown on the card
   id     : Google Drive FOLDER id
   date   : shown on card and page
   cover  : optional file id for the cover (defaults to first photo)
   photos : optional array of exact Drive file IDs (if omitted, whole folder is shown)
   Everything must be shared as "Anyone with the link - Viewer".
   ===================================================== */
const EVENTS = [
    {
        name: '2nd International Olympic Research Conference',
        id: '11MuuA8-PEzxcDh-fSN_DJRuP7uQfkYM9',
        date: '27 - 30 January 2026',
        photos: [
            '1jNs7mAwPvpNhFi_voWjRZM14TK6fJERa',
            '14tI0jx6X3CJZJ9IvF9Co_N2xABH3s7Yg',
            '12gZtbJ5AtT5v9wppu4CSwCMFkvcxwzQ-',
            '16pRYJY1d-Pyl7sVAmNsgwr8uaACnbIoA',
            '15b4DtiW0KBreLNuZ4PpBOMezRbLTNk1b',
            '1v6ALS1-7FhE8zmRPD04XPO5NzmtTbf5_',
            '1XwaFUE0fdnOVCDJFuf4SsbtuhD6UwtAP',
            '14QtPqXDek3tmm2hGXfLG59MX9SKIzFVr',
            '1I_RNB9nGeOdzEEOF09LDYut_KHOsC9aM',
            '1gEglIBOGpiEs7dVJ11jEKEAzuNkCoPuH',
        ],
    },
    {
        name: 'BCORE Night Run',
        id: '1bP9M89LzksUzthhobIXkNPnAfEqFFx4c',
        date: '10 January 2026',
    },
];

const PAGE_SIZE = 60;
const DRIVE_API = 'https://www.googleapis.com/drive/v3/files';

const mediaUrl = (id) => `${DRIVE_API}/${id}?alt=media&key=${API_KEY}`;
const thumb = (id, width) => `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`;
const legacyUrl = (id) => `https://drive.google.com/uc?export=view&id=${id}`;

const getEventPhotoIds = (event) => {
    const rawList = Array.isArray(event?.photos) ? event.photos : [];
    return [...new Set(rawList.map((id) => String(id).trim()).filter(Boolean))];
};

async function listImages(folderId, { pageToken, pageSize = PAGE_SIZE, photoIds = [] } = {}) {
    if (photoIds.length > 0) {
        const uniqueIds = [...new Set(photoIds.map((id) => String(id).trim()).filter(Boolean))];
        // Metadata is optional: if it fails we still show the photo from its ID.
        const results = await Promise.all(
            uniqueIds.map(async (id) => {
                try {
                    const res = await fetch(
                        `${DRIVE_API}/${id}?key=${API_KEY}&fields=id,name,mimeType,imageMediaMetadata(width,height)`
                    );
                    if (!res.ok) {
                        const body = await res.json().catch(() => ({}));
                        console.warn('Drive metadata failed for', id, body?.error?.message || res.status);
                        return { id, name: id };
                    }
                    const data = await res.json();
                    if (data && data.mimeType && !data.mimeType.startsWith('image/')) return null;
                    return data || { id, name: id };
                } catch (err) {
                    console.warn('Drive metadata error for', id, err);
                    return { id, name: id };
                }
            })
        );
        return { files: results.filter(Boolean), nextPageToken: null };
    }

    const params = new URLSearchParams({
        key: API_KEY,
        q: `'${folderId}' in parents and mimeType contains 'image/' and trashed=false`,
        fields: 'nextPageToken,files(id,name,imageMediaMetadata(width,height))',
        orderBy: 'name',
        pageSize: String(pageSize),
        supportsAllDrives: 'true',
        includeItemsFromAllDrives: 'true',
    });
    if (pageToken) params.set('pageToken', pageToken);

    const res = await fetch(`${DRIVE_API}?${params.toString()}`);
    if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error?.message || `Google Drive request failed (${res.status})`);
    }
    return res.json();
}

/* ---------- Icons ---------- */
const Svg = ({ children }) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {children}
    </svg>
);
const IconClose = () => <Svg><path d="M18 6 6 18M6 6l12 12" /></Svg>;
const IconPrev = () => <Svg><path d="m15 18-6-6 6-6" /></Svg>;
const IconNext = () => <Svg><path d="m9 18 6-6-6-6" /></Svg>;
const IconBack = () => <Svg><path d="M19 12H5M12 19l-7-7 7-7" /></Svg>;
const IconExternal = () => <Svg><path d="M14 4h6v6M20 4 10 14M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" /></Svg>;
const IconExpand = () => <Svg><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></Svg>;
const IconArrowUpRight = () => <Svg><path d="M7 17 17 7M8 7h9v9" /></Svg>;

/* ---------- Image that tries several URLs in order and fades in ---------- */
const DriveImage = ({ sources, alt = '', className = '', ...rest }) => {
    const [index, setIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const key = sources.join('|');
    useEffect(() => {
        setIndex(0);
        setLoaded(false);
    }, [key]);

    return (
        <img
            {...rest}
            className={`gal-img ${loaded ? 'is-loaded' : ''} ${className}`.trim()}
            src={sources[Math.min(index, sources.length - 1)]}
            alt={alt}
            referrerPolicy="no-referrer"
            onLoad={() => setLoaded(true)}
            onError={() => setIndex((i) => (i < sources.length - 1 ? i + 1 : i))}
        />
    );
};

/* ---------- Event card ---------- */
const EventCard = ({ event, onOpen }) => {
    const eventPhotoIds = getEventPhotoIds(event);
    const [coverId, setCoverId] = useState(event.cover || eventPhotoIds[0] || null);
    const count = eventPhotoIds.length;

    useEffect(() => {
        if (coverId) return;
        let cancelled = false;
        listImages(event.id, { pageSize: 1 })
            .then((d) => { if (!cancelled && d.files[0]) setCoverId(d.files[0].id); })
            .catch(() => {});
        return () => { cancelled = true; };
    }, [event, coverId]);

    return (
        <button type="button" className="gal-card" onClick={() => onOpen(event)}>
            <div className="gal-card-cover">
                {coverId && (
                    <DriveImage
                        sources={[thumb(coverId, 1000), mediaUrl(coverId), legacyUrl(coverId)]}
                        alt=""
                        loading="lazy"
                    />
                )}
            </div>

            <div className="gal-card-top">
                {event.date && <span className="gal-chip">{event.date}</span>}
                <span className="gal-card-go"><IconArrowUpRight /></span>
            </div>

            <div className="gal-card-body">
                <h3>{event.name}</h3>
                <span className="gal-card-count">
                    {count > 0 ? `${count} photo${count === 1 ? '' : 's'}` : 'View the full album'}
                </span>
            </div>
        </button>
    );
};

/* ---------- Photos of one event ---------- */
const EventPhotos = ({ event, onBack }) => {
    const [photos, setPhotos] = useState([]);
    const [nextToken, setNextToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [active, setActive] = useState(null);
    const stripRef = useRef(null);
    const touchX = useRef(null);

    const load = useCallback(async (token) => {
        setLoading(true);
        setError('');
        try {
            const d = await listImages(event.id, {
                pageToken: token,
                photoIds: getEventPhotoIds(event),
            });
            setPhotos((prev) => (token ? [...prev, ...d.files] : d.files));
            setNextToken(d.nextPageToken || null);
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }, [event]);

    useEffect(() => {
        setPhotos([]);
        setNextToken(null);
        setActive(null);
        load(null);
        window.scrollTo(0, 0);
    }, [load]);

    const step = useCallback((dir) => {
        setActive((i) => {
            if (i === null) return i;
            const n = i + dir;
            return n >= 0 && n < photos.length ? n : i;
        });
    }, [photos.length]);

    // Keyboard controls + lock page scroll while the lightbox is open
    useEffect(() => {
        if (active === null) return;
        const onKey = (e) => {
            if (e.key === 'Escape') setActive(null);
            if (e.key === 'ArrowLeft') step(-1);
            if (e.key === 'ArrowRight') step(1);
        };
        document.addEventListener('keydown', onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [active, step]);

    // Keep the active filmstrip thumbnail in view
    useEffect(() => {
        if (active === null || !stripRef.current) return;
        const el = stripRef.current.querySelector('[data-active="true"]');
        if (el) el.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
    }, [active]);

    const current = active !== null ? photos[active] : null;
    const countLabel = `${photos.length}${nextToken ? '+' : ''} ${photos.length === 1 && !nextToken ? 'photo' : 'photos'}`;

    const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
    const onTouchEnd = (e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
    };

    return (
        <section className="gal-photos">
            <div className="gal-container">
                <button type="button" className="gal-back" onClick={onBack}>
                    <IconBack /> All events
                </button>

                <h2 className="gal-event-title">{event.name}</h2>
                <div className="gal-event-meta">
                    {event.date && <span className="gal-chip gal-chip--light">{event.date}</span>}
                    {photos.length > 0 && <span className="gal-chip gal-chip--light">{countLabel}</span>}
                </div>

                {error && (
                    <div className="gal-error">
                        <strong>Couldn't load photos.</strong> {error}
                        <br />
                        Check the API key, that the Drive API is enabled, and that the folder is shared
                        as "Anyone with the link".
                    </div>
                )}

                <div className="gal-grid">
                    {photos.map((p, i) => (
                        <button
                            type="button"
                            key={p.id}
                            className="gal-thumb"
                            onClick={() => setActive(i)}
                            aria-label={`Open photo ${i + 1}`}
                        >
                            <DriveImage
                                sources={[thumb(p.id, 700), mediaUrl(p.id), legacyUrl(p.id)]}
                                alt=""
                                loading="lazy"
                                width={p.imageMediaMetadata?.width || 1200}
                                height={p.imageMediaMetadata?.height || 800}
                            />
                            <span className="gal-thumb-icon"><IconExpand /></span>
                        </button>
                    ))}

                    {loading && photos.length === 0 &&
                        [0, 1, 2, 3, 4, 5].map((n) => <div key={n} className="gal-skel" aria-hidden="true" />)}
                </div>

                {!loading && !error && photos.length === 0 && (
                    <p className="gal-status">No photos in this event yet.</p>
                )}
                {loading && photos.length > 0 && <p className="gal-status">Loading more photos...</p>}
                {!loading && nextToken && (
                    <button type="button" className="gal-more" onClick={() => load(nextToken)}>
                        Load more photos
                    </button>
                )}
            </div>

            {current && (
                <div className="gal-lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer">
                    <div className="gal-lb-top">
                        <span className="gal-lb-count">
                            {active + 1} / {photos.length}{nextToken ? '+' : ''}
                        </span>
                        <div className="gal-lb-actions">
                            <a
                                href={`https://drive.google.com/file/d/${current.id}/view`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="gal-lb-link"
                            >
                                <IconExternal /> <span>Open in Drive</span>
                            </a>
                            <button type="button" className="gal-lb-icon" onClick={() => setActive(null)} aria-label="Close">
                                <IconClose />
                            </button>
                        </div>
                    </div>

                    <div
                        className="gal-lb-stage"
                        onClick={(e) => { if (e.target === e.currentTarget) setActive(null); }}
                        onTouchStart={onTouchStart}
                        onTouchEnd={onTouchEnd}
                    >
                        <button type="button" className="gal-lb-nav gal-lb-prev" onClick={() => step(-1)}
                            disabled={active === 0} aria-label="Previous photo"><IconPrev /></button>

                        <DriveImage
                            key={current.id}
                            className="gal-lb-img"
                            sources={[mediaUrl(current.id), thumb(current.id, 2000), legacyUrl(current.id)]}
                            alt={current.name || ''}
                        />

                        <button type="button" className="gal-lb-nav gal-lb-next" onClick={() => step(1)}
                            disabled={active === photos.length - 1} aria-label="Next photo"><IconNext /></button>
                    </div>

                    <div className="gal-lb-strip" ref={stripRef}>
                        {photos.map((p, i) => (
                            <button
                                type="button"
                                key={p.id}
                                data-active={i === active}
                                className="gal-lb-mini"
                                onClick={() => setActive(i)}
                                aria-label={`Go to photo ${i + 1}`}
                            >
                                <img src={thumb(p.id, 200)} alt="" loading="lazy" referrerPolicy="no-referrer" />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

/* ---------- Page ---------- */
export const Gallery = () => {
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Gallery – Bharat Centre of Olympic Research & Education</title>
                <meta name="description" content="Photo gallery of BCORE events." />
            </Helmet>

            <div className="gallery-container">
                <section className={`gal-hero ${selected ? 'gal-hero--compact' : ''}`}>
                    <div className="gal-container">
                        <div className="gal-hero-content">
                            <h1 className="gal-hero-title">Event Gallery</h1>
                            <p className="gal-hero-subtitle">
                                Moments from the conferences, workshops and seminars of the
                                Bharat Centre of Olympic Research &amp; Education.
                            </p>
                        </div>
                    </div>
                </section>

                {selected ? (
                    <EventPhotos event={selected} onBack={() => setSelected(null)} />
                ) : (
                    <section className="gal-events">
                        <div className="gal-container">
                            <div className="gal-card-grid">
                                {EVENTS.map((ev) => (
                                    <EventCard key={ev.id} event={ev} onOpen={setSelected} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </>
    );
};