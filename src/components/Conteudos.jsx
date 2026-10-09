import React, { useState } from 'react';
import { gymData } from '../data/content';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import AnimatedSectionTitle from './AnimatedSectionTitle';

const isVideo = (url) => url && (url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg') || url.endsWith('.mov'));

const PostCard = ({ post }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (currentImageIndex < post.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className={`post-card ${post.type === 'aviso' ? 'post-aviso' : ''}`}>
      <div className="post-header">
        <span className="post-category">{post.category}</span>
        <span className="post-date">{post.date}</span>
      </div>
      
      <div className="post-media-container">
        {post.video || isVideo(post.images[currentImageIndex]) ? (
          <video 
            src={post.video || post.images[currentImageIndex]}
            autoPlay
            loop
            muted
            playsInline
            className="post-image"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <>
            <img 
              src={post.images[currentImageIndex]} 
              alt={post.title} 
              className="post-image"
              loading="lazy"
            />
            {post.images.length > 1 && (
              <>
                <button className="carousel-btn prev" onClick={prevImage} disabled={currentImageIndex === 0} aria-label="Imagem anterior">
                  <ChevronLeft size={24} />
                </button>
                <button className="carousel-btn next" onClick={nextImage} disabled={currentImageIndex === post.images.length - 1} aria-label="Próxima imagem">
                  <ChevronRight size={24} />
                </button>
                <div className="carousel-indicators">
                  {post.images.map((_, idx) => (
                    <span key={idx} className={`indicator ${idx === currentImageIndex ? 'active' : ''}`} />
                  ))}
                </div>
                <div className="carousel-counter">
                  {currentImageIndex + 1} / {post.images.length}
                </div>
              </>
            )}
          </>
        )}
      </div>

      <div className="post-content">
        <h3 className="post-title">{post.title}</h3>
        <p className="post-description">{post.description}</p>
      </div>
    </div>
  );
};

const Conteudos = () => {
  const [activeCategory, setActiveCategory] = useState("TODOS");

  const filteredPosts = activeCategory === "TODOS" 
    ? gymData.posts 
    : gymData.posts.filter(post => post.category === activeCategory);

  return (
    <section id="conteudos" className="conteudos-section">
      <div className="container">
        <div className="section-header">
          <AnimatedSectionTitle className="section-title">
            Conteúdos <br/>
            <span className="text-primary">Personal Fit.</span>
          </AnimatedSectionTitle>
          <p className="section-subtitle">
            Informação para cuidar melhor de você.
          </p>
        </div>

        <div className="conteudos-filters">
          {gymData.categories.map(cat => (
            <button 
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="conteudos-grid">
          {filteredPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
          {filteredPosts.length === 0 && (
            <p style={{ color: 'var(--text-muted)', textAlign: 'center', gridColumn: '1 / -1', padding: '2rem' }}>
              Nenhum conteúdo encontrado nesta categoria.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Conteudos;
