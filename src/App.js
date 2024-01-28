import './App.css';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


function App() {
  const [activateKey, setActivateKey] = useState(''); 
  const [displayText, setDisplayText] = useState(''); 

  function playSound(selector) {
    const audio = document.getElementById(selector); 
    const drumPad = drumPads.find((pad) => pad.text === selector)
    audio.currentTime = 0; 
    //console.log(audio)
    audio.play(); 
    setActivateKey(selector); 
    setDisplayText(drumPad.id); 

    setTimeout(() => {
      setActivateKey('')
    }, 300)
  }

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
    //console.log(event.key)
      playSound(event.key.toUpperCase()); 
      setActivateKey(event.key.toUpperCase()); 
    })
  }, [])

  const drumPads = [
    {
      keyCode: 81,
      id: 'Heater-1',
      text: 'Q',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      id: 'Heater-2',
      text: 'W',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      id: 'Heater-3',
      text: 'E',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      id: 'Heater-4',
      text: 'A',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      id: 'Clap',
      text: 'S',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      id: 'Open HH',
      text: 'D',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      id: 'Kick n Hat',
      text: 'Z',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      id: 'kick',
      text: 'X',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      id: 'Close HH',
      text: 'C',
      src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ]

  return (
    <div className="App">
      <div id='drum-machine'>
        <div className='drum-pads'>
          {drumPads.map((drumPad) => 
          <div 
          onClick={() => {playSound(drumPad.text)}} 
          className={`drum-pad ${activateKey === drumPad.text ? 'active' : ''}`} 
          id={drumPad.src}>
            {drumPad.text}
            <audio 
            className='clip' 
            id={drumPad.text} 
            src={drumPad.src}>
            </audio>
          </div>)}
        </div>
        <div id="display">{displayText}</div>
      </div>
    </div>
  );
}

export default App;
