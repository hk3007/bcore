import React, { useEffect, useState, useCallback } from "react";
import { Newspaper, Megaphone, Award, Globe, Search, Bell } from 'lucide-react';
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
                <title>BCORE NEWS</title>
            </Helmet>

        <section className="news-hero-section">
        {/* Dynamic Background Layer */}
        <div className="news-bg-graphics">
            <div className="news-grid-mesh"></div>
            <div className="news-radial-glow"></div>
            
            {/* Floating Newspaper Names */}
            <div className="news-floating-papers">
            <div className="news-paper-tag paper-1">The Indian EXPRESS</div>
            <div className="news-paper-tag paper-2">Daily Pioneer</div>
            <div className="news-paper-tag paper-3">Gujarat Samachar</div>
            <div className="news-paper-tag paper-4">Times of India</div>
            <div className="news-paper-tag paper-5">Divya Bhaskar</div>
            <div className="news-paper-tag paper-6">Press Trust of India</div>
            </div>
        </div>

        <div className="news-container news-hero-flex">
            <div className="news-hero-text">
            <h1 className="news-main-title">
                The BCORE <br />
                <span className="news-gold-accent">Bulletin</span>
            </h1>
            <p className="news-lead-text">Official News & Olympic Research Updates</p>
            </div>

            <div className="news-hero-infographic">
            <div className="news-info-box news-main-node">
                <Award className="news-gold-accent" size={32} />
                <span>Latest Updates</span>
            </div>
            <div className="news-info-box news-sub-node-1">Research</div>
            <div className="news-info-box news-sub-node-2">Olympic Hub</div>
            <div className="news-info-box news-sub-node-3">Innovation</div>
            </div>
        </div>

        <div className="news-wave-bottom">
            <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#ffffff" d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>
        </section>

            <div className="royal-container">
                {loading && currentArticles.length === 0 ? (
                    <div className="royal-loader-box">
                        <div className="royal-spinner"></div>
                        <p>Accessing Archives...</p>
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