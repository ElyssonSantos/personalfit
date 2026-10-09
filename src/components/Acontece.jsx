import React from 'react';
import { gymData } from '../data/content';
import { Bell } from 'lucide-react';

const Acontece = () => {
  return (
    <section className="acontece-section" style={{ background: 'var(--bg-tertiary)', padding: '4rem 0' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <Bell className="text-primary" size={28} />
          <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Acontece na Personal Fit</h2>
        </div>

        <div className="acontece-grid">
          {gymData.news.map((item) => (
            <div key={item.id} className="acontece-card">
              <span className={`acontece-tag ${item.tag.toLowerCase()}`}>{item.tag}</span>
              <h4 className="acontece-title">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Acontece;
