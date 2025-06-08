import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { songs } from '../data';

const MarianPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSongs = songs.filter(
    (song) =>
      song.category === 'Marian' &&
      song.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="entrance-page">
        <h1>Marian Songs</h1>
        <div>
          <input
            type="text"
            placeholder="Search for a song..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='searchplace'
          />
        </div>
        <div className="songs-container">
          {filteredSongs.map(({ id, title, youtubeId, description, hook }) => (
            <div key={id} className="song-row">
              <div className="video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="song-details">
                <h3 className="song-title">{title}</h3>
                <p className="song-hook"><em>{hook}</em></p>
                <p className="song-description">{description}</p>
              </div>
            </div>
          ))}
          {filteredSongs.length === 0 && <p>No Marian songs found.</p>}
        </div>
      </div>
    </div>
  );
};

export default MarianPage; 