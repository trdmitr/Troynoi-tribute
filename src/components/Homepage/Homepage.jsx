import React from 'react'
import classes from './Homepage.module.css'
import { useNavigate } from 'react-router-dom'
import cl from '../Pub.module.css'
import CaverButton from '../UI/Buttons/CaverButton'
import IconButtonHome from '../UI/Buttons/IconButtonHome'
import Img from '../Img'

// import PlayButton from '../UI/Buttons/PlayButton'
const Homepage = () => {
  const navigate = useNavigate();
  const imgUrl = "https://sun9-15.userapi.com/impg/QDiO4cOG2JmrTiTEAM_n4LgpfWs8WX9Zjkn7jw/Yf83FLvqIWs.jpg?size=1500x1532&quality=95&sign=8419cc6024e8bb6477d740ef43c38767&type=album"
  return (
    <div className={cl.tribute_app}>
      <div className={classes.content}>
        <IconButtonHome onClick={() => navigate("/")}>Главная</IconButtonHome>
        <CaverButton onClick={() => navigate("/cavers")}>Каверы</CaverButton>
        {/* <PlayButton  onClick={() => navigate("/playlist")}></PlayButton> */}
        <div className={classes.front_header}>
                    <h>Тройной трибьют!</h>
                </div>
                <div className={classes.front_media}>
                  <Img imgUrl = {imgUrl}/>
                    {/* <img src={imUrl} width={80} alt="Каверы Подземки" /> */}
                </div>
                <div className={classes.front_body}>
                    <span>С ДНЁМ РОЖДЕНИЯ ПРЕКРАСНЫХ ИСПОЛНИТЕЛЕЙ! 🤘🏻🤘🏻🤘🏻 </span>
                </div>
      </div>
    </div>
  )
}

export default Homepage