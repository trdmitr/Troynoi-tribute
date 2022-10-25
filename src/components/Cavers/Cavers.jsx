import React, { useMemo, useState } from 'react'
import classes from './Cavers.module.css'
import { useNavigate } from 'react-router-dom'
import cl from '../Pub.module.css'
import CaverButton from '../UI/Buttons/CaverButton'
import IconButtonHome from '../UI/Buttons/IconButtonHome'
import PlayButton from '../UI/Buttons/PlayButton'
import About from '../About'
import Modal from '../UI/Buttons/Modals/Modals'

const Cavers = ({ songs}) => {
    
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const singContent = useMemo(() => {
        return songs.map((caver) => (
            <div className={classes.col} key={caver.index} onClick={() => navigate(`/cavers/${caver.id}`)}>
                <div className={classes.item}>
                    <img src={caver.photo} alt={caver.name} />
                </div>
                <p>{caver.name}</p>
            </div>
        ))
    }, [songs])
    return (
        <div className={cl.tribute_app}>

            <div className={classes.content}>
                <Modal visible={modal} setVisible={setModal}>
                    <About />
                </Modal>
                <IconButtonHome onClick={() => navigate("/")}>Главная</IconButtonHome>
                <CaverButton onClick={() => navigate("/cavers")}>Каверы</CaverButton>
                <PlayButton onClick={() => setModal(true)}></PlayButton>
                {/* <PlayButton onClick={() => navigate("/playlist")}></PlayButton> */}
                <div className={classes.row} >
                    {singContent}</div>
            </div>

        </div>
    )
}

export default Cavers