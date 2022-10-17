import React from 'react'
import classes from './Homepage.module.css'
import { useNavigate } from 'react-router-dom'
import cl from '../Pub.module.css'
import CaverButton from '../UI/Buttons/CaverButton'
import IconButtonHome from '../UI/Buttons/IconButtonHome'
// import PlayButton from '../UI/Buttons/PlayButton'
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className={cl.tribute_app}>
      <div className={classes.content}>
        <IconButtonHome onClick={() => navigate("/")}>Главная</IconButtonHome>
        <CaverButton onClick={() => navigate("/cavers")}>Каверы</CaverButton>
        {/* <PlayButton  onClick={() => navigate("/playlist")}></PlayButton> */}
        <div className="header">
                    <h>Тройной трибьют!</h>
                </div>
                <div className="media">
                    <img className="media-image_front" src="https://drive.google.com/uc?export=download&id=1t8TbhEr-plZdiTN15mBZf8GNw35Cc2Fo" width={80} alt="Каверы Подземки" />
                </div>
                <div className="media-body">
                    <span>С ДНЁМ РОЖДЕНИЯ ПРЕКРАСНЫХ ИСПОЛНИТЕЛЕЙ! 🤘🏻🤘🏻🤘🏻 </span>
                </div>
      </div>
    </div>
  )
}

export default Homepage