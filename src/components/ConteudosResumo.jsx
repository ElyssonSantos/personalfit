import React from 'react';
import { gymData } from '../data/content';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSectionTitle from './AnimatedSectionTitle';

const isVideo = (url) => url && (url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg') || url.endsWith('.mov'));

const PostCardCompact = ({ post }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const nextImage = (e) => {
    e.preventDefault();
    if (currentImageIndex < post.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = (e) => {
    e.preventDefault();
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

const ConteudosResumo = () => {
  const latestPosts = gymData.posts.slice(0, 3);

  return (
    <section id="conteudos" className="conteudos-section">
      <div className="container">
        <div className="d-flex justify-between align-center" style={{ marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <AnimatedSectionTitle className="section-title" style={{ marginBottom: 0 }}>
              Conteúdos <br/>
              <span className="text-primary">Personal Fit.</span>
            </AnimatedSectionTitle>
          </div>
          <Link to="/conteudos" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Ver Todos os Conteúdos <ArrowRight size={20} />
          </Link>
        </div>

        <div className="conteudos-grid">
          {latestPosts.map(post => (
            <PostCardCompact key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConteudosResumo;
