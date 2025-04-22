
import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, VolumeX, Volume2 } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/background-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = volume;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => {
          console.error("Music autoplay was prevented:", e);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (isMuted && newVolume > 0) {
      setIsMuted(false);
    }
  };

  return (
    <div className="fixed z-50 bottom-4 right-4 bg-pixel-primary p-2 rounded-lg border-2 border-black shadow-lg flex items-center space-x-2">
      <button 
        onClick={togglePlay}
        className="w-8 h-8 flex items-center justify-center bg-pixel-highlight rounded-full border border-black"
      >
        {isPlaying ? <Pause className="text-white" size={16} /> : <Play className="text-white" size={16} />}
      </button>
      
      <div className="hidden sm:flex items-center space-x-2">
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
          value={volume} 
          onChange={handleVolumeChange}
          className="w-16 h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer"
        />
        
        <button 
          onClick={toggleMute}
          className="w-8 h-8 flex items-center justify-center bg-pixel-secondary rounded-full border border-black"
        >
          {isMuted ? <VolumeX className="text-white" size={16} /> : <Volume2 className="text-white" size={16} />}
        </button>
      </div>
      
      <span className="text-xs text-white font-pixel hidden sm:inline">8-BIT BEATS</span>
    </div>
  );
};

export default MusicPlayer;
