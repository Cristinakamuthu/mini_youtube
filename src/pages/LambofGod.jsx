import React, { useState } from 'react';
import { songs } from '../data';
import { FaSearch } from 'react-icons/fa';


const LambofGod = () => {
  const [searchTerm, setSearchTerm] = useState('');
    const [inputValue, setInputValue] = useState ('');

    const searchbutton = () => {
    setSearchTerm(inputValue);
  }

  
  const LambofGodsongs= songs.filter(song => song.category === 'LambofGod' &&
      song.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
    return (
      <div>
        
            <div className="entrance-page">
              <h1>Lamb of God  Songs </h1>
    <div className='buttonplace'>
              <input
                type="text"
                placeholder="Search for a song..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className='buttion'
              />
              <button onClick={searchbutton} className='searchh'>
                <FaSearch />
              </button>
              
            </div>
              <div className="songs-container">
                {LambofGodsongs.map(({ id, title, youtubeId, description, hook }) => (
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

export default LambofGod