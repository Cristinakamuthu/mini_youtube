import React from 'react'
import Navbar from '../components/Navbar'
import { songs } from '../data'

const PraisePage = () => {
  const praisesongs= songs.filter(song => song.category === 'Praise');
    return (
      <div>
        <Navbar />
        <div>
        
            <div className="entrance-page">
              <h1>Worship Songs </h1>
              <div className="songs-container">
                {praisesongs.map(({ id, title, youtubeId, description, hook }) => (
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
  
      </div>
      </div>
    )
  }

export default PraisePage