import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'

const DeathPage = () => {
  const deathsongs = songs.filter(song => song.category === 'Death');
  return (
    <div>
      <Navbar />
          <div className="entrance-page">
            <h1>Funeral Songs </h1>
            <div className="songs-container">
              {deathsongs.map(({ id, title, youtubeId, description, hook }) => (
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
export default DeathPage