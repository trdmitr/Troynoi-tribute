import React, { useEffect, useState } from 'react'
import classes from './PlayList.module.css'
import { useNavigate } from 'react-router-dom'
import cl from '../Pub.module.css'
import CaverButton from '../UI/Buttons/CaverButton'
import IconButtonHome from '../UI/Buttons/IconButtonHome'
import PlayButton from '../UI/Buttons/PlayButton'
import CaverServise from '../API/CaverServise'
import './Playlist.css'
const PlayList = () => {
  const navigate = useNavigate();
  const [musicList, setmusicList] = useState([]);
  const [index, setIndex] = useState(3)
  const [currentTime, setcurrentTime] = useState('0:00')
  async function getCavers() {
    const response = await CaverServise.getCavers();
    setmusicList(response.record.cavers)


  }
  useEffect(() => {
    getCavers()

  }, [])
  const useAudio = url => {
    const [audio] = useState(new Audio());
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

     const PlayTrack = useEffect(() => {
      playing ? audio.play() : audio.pause();
      console.log ("PlayTrack")
    },
      [playing]
    );

    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, []);

    return [playing, toggle, PlayTrack];
  };

  const [playing, toggle, PlayTrack] = useAudio();
  return (
    <div className={cl.tribute_app}>
      <div className={classes.content}>
        <IconButtonHome onClick={() => navigate("/")}>Главная</IconButtonHome>
        <CaverButton onClick={() => navigate("/cavers")}>Каверы</CaverButton>
        <PlayButton onClick={() => navigate("/playlist")}></PlayButton>
        <div className="play-list" >
          {musicList.map((music, key = 0) =>
            <div key={key}
            onClick={toggle}
              className={"track " +
                (index === key && !playing ? 'current-audio' : '') +
                (index === key && playing ? 'play-now' : '')} 
              >{PlayTrack}
              <img className="track-img" src={music.photo} alt={music.name} />
              <div className="track-discr" >
                <h2 className="track-name" >{music.audio_name1}</h2>
                <h3 className="track-author" >{music.name}</h3>

              </div>
              <span className="track-duration" >
                {(index === key)
                  ? currentTime
                  : music.duration
                }
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PlayList