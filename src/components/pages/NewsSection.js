import React, { useEffect, useState } from "react";
import "./news.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons

const NewsSection = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 8;

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchNewsData();
    }, []);

    const fetchNewsData = async () => {
        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxSXaR-7D5_Mjz9Lb9IEMuArue98FAVi5DQg31Z9X29WcP65DwnMFrLgjUa2VIimgin/exec";

        try {
            const response = await fetch(SCRIPT_URL);
            const data = await response.json();

            const sortedArticles = data.sort((a, b) => new Date(b.date) - new Date(a.date));
            setNewsArticles(sortedArticles);
        } catch (error) {
            console.error("Error fetching news data:", error);
        }
    };

    // Pagination Logic
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = newsArticles.slice(indexOfFirstArticle, indexOfLastArticle);

    const totalPages = Math.ceil(newsArticles.length / articlesPerPage);

    return (
        <section className="news-section">
            <h2 className="news-title">BCORE NEWS</h2>
            <div className="news-layout">
                <div className="news-grid">
                    {currentArticles.length > 0 ? (
                        currentArticles.map((article, index) => (
                            <div key={index} className="news-card">
                                <img src={article.imgSrc} alt={article.alt} className="news-image" />
                                <div className="news-content">
                                    <p className="news-source-date">
                                        {article.source} 
                                    </p>
                                    <h3 className="news-headline">{article.title}</h3>
                                    <a href={article.link} target="_blank" rel="noopener noreferrer" className="news-link">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading news...</p>
                    )}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="pagination">
                        <button
                            className="pagination-btn"
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <FaChevronLeft /> Previous
                        </button>
                        <span className="pagination-text">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            className="pagination-btn"
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Next <FaChevronRight />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default NewsSection;
