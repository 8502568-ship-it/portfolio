import { useState } from "react";
import "../styles/youtube.css";

export default function YouTubeClone({ setPage }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("home");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "Web Development Tutorial",
      channel: "Tech Channel",
      views: "1.2M views",
      time: "12:45",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoId: "dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "React Hooks Explained",
      channel: "Code Masters",
      views: "850K views",
      time: "15:30",
      thumbnail: "https://img.youtube.com/vi/j6CgKvBmtzs/maxresdefault.jpg",
      videoId: "j6CgKvBmtzs",
    },
    {
      id: 3,
      title: "JavaScript Advanced Concepts",
      channel: "JavaScript Pro",
      views: "520K views",
      time: "22:15",
      thumbnail: "https://img.youtube.com/vi/1MZ7WQZQJCw/maxresdefault.jpg",
      videoId: "1MZ7WQZQJCw",
    },
    {
      id: 4,
      title: "CSS Flexbox Complete Guide",
      channel: "Design Basics",
      views: "950K views",
      time: "18:40",
      thumbnail: "https://img.youtube.com/vi/tXIhdp5R7sc/maxresdefault.jpg",
      videoId: "tXIhdp5R7sc",
    },
    {
      id: 5,
      title: "Web Design Best Practices",
      channel: "UX Experts",
      views: "670K views",
      time: "14:20",
      thumbnail: "https://img.youtube.com/vi/LlYcSYoNbyQ/maxresdefault.jpg",
      videoId: "LlYcSYoNbyQ",
    },
    {
      id: 6,
      title: "Node.js Backend Development",
      channel: "Backend Masters",
      views: "430K views",
      time: "19:50",
      thumbnail: "https://img.youtube.com/vi/TlB_eWDSMt4/maxresdefault.jpg",
      videoId: "TlB_eWDSMt4",
    },
    {
      id: 7,
      title: "Database Design Fundamentals",
      channel: "Data Science Hub",
      views: "580K views",
      time: "21:30",
      thumbnail: "https://img.youtube.com/vi/ztHopE5Wnpc/maxresdefault.jpg",
      videoId: "ztHopE5Wnpc",
    },
    {
      id: 8,
      title: "API Development with Express",
      channel: "Web Dev Pro",
      views: "720K views",
      time: "16:45",
      thumbnail: "https://img.youtube.com/vi/L72fhGm1tfE/maxresdefault.jpg",
      videoId: "L72fhGm1tfE",
    },
  ];

  const categories = ["home", "trending", "subscriptions", "library"];

  return (
    <div className="youtube-container">
      {/* Header */}
      <header className="youtube-header">
        <div className="header-left">
          <button
            className="menu-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
          <h1 className="logo">▶ YouTube Clone</h1>
        </div>
        <div className="header-search">
          <input type="text" placeholder="Search" />
          <button>🔍</button>
        </div>
        <div className="header-right">
          <button className="icon-btn">🎤</button>
          <button className="icon-btn">🔔</button>
          <button className="icon-btn">👤</button>
        </div>
      </header>

      <div className="youtube-main">
        {/* Sidebar */}
        <aside className={`youtube-sidebar ${sidebarOpen ? "open" : "closed"}`}>
          <nav className="sidebar-nav">
            {categories.map((category) => (
              <button
                key={category}
                className={`nav-item ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === "home" && "🏠 Home"}
                {category === "trending" && "🔥 Trending"}
                {category === "subscriptions" && "📺 Subscriptions"}
                {category === "library" && "📚 Library"}
              </button>
            ))}
          </nav>
          <hr />
          <div className="sidebar-section">
            <h3>Subscriptions</h3>
            <ul>
              <li>Tech Channel</li>
              <li>Code Masters</li>
              <li>JavaScript Pro</li>
              <li>Design Basics</li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="youtube-content">
          <div className="videos-grid">
            {videos.map((video) => (
              <div
                key={video.id}
                className="video-card"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <span className="video-duration">{video.time}</span>
                  <div className="play-button">▶</div>
                </div>
                <div className="video-info">
                  <h3>{video.title}</h3>
                  <p className="channel-name">{video.channel}</p>
                  <p className="video-stats">{video.views}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Video Player Modal */}
      {selectedVideo && (
        <div className="video-modal" onClick={() => setSelectedVideo(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedVideo(null)}
            >
              ✕
            </button>
            <div className="iframe-container">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-details">
              <h2>{selectedVideo.title}</h2>
              <p className="channel-name">{selectedVideo.channel}</p>
              <p className="video-stats">{selectedVideo.views}</p>
            </div>
          </div>
        </div>
      )}

      {/* Back Button */}
      <button
        className="back-btn"
        onClick={() => setPage && setPage("portfolio")}
      >
        ← Back to Portfolio
      </button>
    </div>
  );
}
