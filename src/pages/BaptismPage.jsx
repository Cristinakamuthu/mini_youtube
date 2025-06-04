import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { songs } from '../data'

const BaptismPage = () => {
  const baptismsongs= songs.filter(song => song.category === 'Baptism');
  return (
    <div>
      <Navbar />
          <div className="entrance-page">
            <h1>Baptism Songs </h1>
            <div className="songs-container">
              {baptismsongs.map(({ id, title, youtubeId, description, hook }) => (
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
  )
}

export default BaptismPage