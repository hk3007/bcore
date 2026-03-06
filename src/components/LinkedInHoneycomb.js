import React, { useState, useEffect } from "react";
import "./LinkedInHoneycomb.css";
import postData from "../data/posts.json";
import logo from "../pages/Images/BCORE Logo.png";

// Universal Platform Icon Switcher
const PlatformLogo = ({ platform }) => {
  const size = 20;
  switch (platform) {
    case "instagram":
      return <svg viewBox="0 0 24 24" width={size} height={size} fill="#E4405F"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5a4.25 4.25 0 0 0-4.25 4.25v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>;
    case "twitter":
    case "x":
      return <svg viewBox="0 0 24 24" width={size - 2} height={size - 2} fill="#000"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
    default: // LinkedIn
      return <svg viewBox="0 0 24 24" width={size + 2} height={size + 2} fill="#0a66c2"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>;
  }
};

const LinkedInCard = ({ data, index, style }) => {
  return (
    <a href={data.link || "#"} target="_blank" rel="noopener noreferrer" className="st-ln-flex-item" style={style}>
      <div className="st-ln-card-vessel">
        <div className="st-ln-card-header">
          <div className="st-ln-avatar">
            <img src={logo} alt="BCORE" loading="lazy" />
          </div>
          <div className="st-ln-author-info">
            <h4 className="st-ln-author-name">{data.author || "Bharat Centre of Olympic"}</h4>
            <p className="st-ln-author-subtext">{data.subtext || "Learn Educate Aspire Disseminate OLYMPISM"}</p>
          </div>
          <div className="st-ln-platform-logo">
            <PlatformLogo platform={data.platform} />
          </div>
        </div>

        <div className="st-ln-post-text">
          <p>{data.text}</p>
          <span className="st-ln-more">...more</span>
        </div>

        <div className="st-ln-image-wrapper">
          <img src={data.image} alt="Post content" className="st-ln-content-img" loading="lazy" />
        </div>

        <div className="st-ln-card-meta">
          <span className="st-ln-id">REF_{data.id ? data.id.slice(-4) : "0000"}</span>
          <div className="st-ln-brand-in">in</div>
        </div>
      </div>
    </a>
  );
};

export default function LinkedInHoneycomb() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postData.posts || []);
  }, []);

  return (
    <section className="st-ln-stage">
      <div className="st-ln-central-flow">
        <header className="st-ln-intro">
          <h2 className="st-ln-title">LATEST UPDATES</h2>
          <div className="st-ln-divider"></div>
        </header>

        <div className="st-ln-flex-canvas">
          {posts.map((post, index) => (
            <LinkedInCard
              key={post.id || index}
              data={post}
              index={index}
              style={{
                "--rotation": index % 2 === 0 ? "1.2deg" : "-1.2deg",
                "--mod-2": index % 2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}