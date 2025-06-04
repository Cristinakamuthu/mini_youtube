import React from 'react';
import { songs } from '../data';

const EntrancePage = () => {
  const entranceSongs = songs.filter(song => song.category === 'Entrance');

  return (
    <div className="entrance-page">
      <h1>Entrance Songs</h1>
      <div className="songs-container">
        {entranceSongs.map(({ id, title, youtubeId, description, hook }) => (
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
      </div>
    </div>
  );
};

export default EntrancePage;
