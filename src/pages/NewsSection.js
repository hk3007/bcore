import React, { useEffect, useState, useCallback } from "react";
import "./news.css";
import { FaChevronLeft, FaChevronRight, FaCrown, FaStar } from "react-icons/fa";
import { Helmet } from 'react-helmet';

const NewsSection = () => {
    const [newsCache, setNewsCache] = useState({}); // State Cache: { 1: [...], 2: [...] }
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const articlesPerPage = 8;

    const BASE_URL = "https://script.google.com/macros/s/AKfycbxSXaR-7D5_Mjz9Lb9IEMuArue98FAVi5DQg31Z9X29WcP65DwnMFrLgjUa2VIimgin/exec";

    const fetchNewsData = useCallback(async (page, isPrefetch = false) => {
        // Skip if page is already cached
        if (newsCache[page]) return;

        try {
            if (!isPrefetch) setLoading(true);

            const response = await fetch(`${BASE_URL}?page=${page}&limit=${articlesPerPage}`);
            const result = await response.json();

            if (result && result.data) {
                setNewsCache(prev => ({
                    ...prev,
                    [page]: result.data
                }));
                setTotalPages(result.totalPages || 1);
            }
        } catch (error) {
            console.error(`Error fetching page ${page}:`, error);
        } finally {
            if (!isPrefetch) setLoading(false);
        }
    }, [newsCache]);

    // Main Effect: Handles current page load and triggers background neighbors
    useEffect(() => {
        const loadPageAndNeighbors = async () => {
            // 1. Load current page if not exists
            if (!newsCache[currentPage]) {
                await fetchNewsData(currentPage);
            }

            // 2. Prefetch NEXT page
            const nextPage = currentPage + 1;
            if (nextPage <= totalPages && !newsCache[nextPage]) {
                fetchNewsData(nextPage, true);
            }

            // 3. Prefetch PREVIOUS page (in case user goes back)
            const prevPage = currentPage - 1;
            if (prevPage >= 1 && !newsCache[prevPage]) {
                fetchNewsData(prevPage, true);
            }
        };

        loadPageAndNeighbors();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage, totalPages, fetchNewsData, newsCache]);

    // Helper to get data for current view
    const currentArticles = newsCache[currentPage] || [];

    return (
        <section className="royal-news-root">
            <Helmet>
                <title>BCORE | Royal Gazette</title>
            </Helmet>

            <header className="royal-hero">
                <div className="royal-meta">
                    <span className="royal-line"></span>
                    <FaCrown className="royal-crown-icon" />
                    <span className="royal-line"></span>
                </div>
                <h1 className="royal-main-title">The BCORE <span>Bulletin</span></h1>
                <p className="royal-subtitle">Official News & Olympic Research Updates</p>
            </header>

            <div className="royal-container">
                {loading && currentArticles.length === 0 ? (
                    <div className="royal-loader-box">
                        <div className="royal-spinner"></div>
                        <p>Accessing Imperial Archives...</p>
                    </div>
                ) : (
                    <>
                        <div className="royal-news-grid">
                            {currentArticles.map((article, index) => {
                                // Every 5th item gets a 'spotlight' class for visual variety
                                const isSpotlight = (index + 1) % 5 === 0;
                                return (
                                    <article key={`${currentPage}-${index}`} className={`royal-card ${isSpotlight ? 'spotlight' : ''}`}>
                                        <div className="royal-image-wrapper">
                                            <img src={article.imgSrc} alt={article.alt} loading="lazy" />
                                            <div className="royal-badge">{article.source}</div>
                                        </div>
                                        <div className="royal-card-content">
                                            {isSpotlight && <div className="important-tag"><FaStar /> Featured Update</div>}
                                            <span className="royal-date">
                                                {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                            </span>
                                            <h3 className="royal-card-title">{article.title}</h3>
                                            <a href={article.link} target="_blank" rel="noopener noreferrer" className="royal-read-btn">
                                                Read More <span>→</span>
                                            </a>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>

                        {totalPages > 1 && (
                            <div className="royal-pagination">
                                <button 
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                                    disabled={currentPage === 1}
                                    className="royal-pagi-btn"
                                >
                                    <FaChevronLeft /> Previous
                                </button>
                                
                                <div className="royal-pagi-status">
                                    Page <b>{currentPage}</b> of {totalPages}
                                </div>

                                <button 
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                                    disabled={currentPage === totalPages}
                                    className="royal-pagi-btn"
                                >
                                    Next <FaChevronRight />
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
};

export default NewsSection;