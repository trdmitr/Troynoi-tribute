import React, { useState, useQuery } from 'react'
import classes from './Cavers.module.css'
import { useNavigate } from 'react-router-dom'
import cl from '../Pub.module.css'
import CaverButton from '../UI/Buttons/CaverButton'
import IconButtonHome from '../UI/Buttons/IconButtonHome'
// import PlayButton from '../UI/Buttons/PlayButton'
import CaverServise from '../API/CaverServise';

const Cavers = () => {
    const navigate = useNavigate();
    const [songs, setSongs] = useState([]);

    async function getCavers() {
        const response = await CaverServise.getCavers();
        setSongs(response.record.cavers)


    }
    useQuery(() => {
        getCavers()

    }, [])



    return (

        <div className={cl.tribute_app}>

            <div className={classes.content}>

                <IconButtonHome onClick={() => navigate("/")}>Главная</IconButtonHome>
                <CaverButton onClick={() => navigate("/cavers")}>Каверы</CaverButton>
                {/* <PlayButton onClick={() => navigate("/playlist")}></PlayButton> */}
                <div className={classes.row} >
                    {songs.map((caver) => (
                        <div className={classes.col} key={caver.index} onClick={() => navigate(`/cavers/${caver.id}`)}>
                            <div className={classes.item}>
                                <img src={caver.photo} alt="" />
                            </div>
                            <p>{caver.name}</p>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Cavers