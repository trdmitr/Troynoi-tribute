import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Cavers from './components/Cavers/Cavers';
// import PlayList from './components/PlayList/PlayList';
import SingleOne from './components/SingleOne/SingleOne';
import { Fragment, useEffect, useState } from 'react';
import CaverServise from './components/API/CaverServise';
import Loader from './components/UI/Loader/Loader';
import { useFetching } from './components/Hooks/useFetching';

function NotFound() {
  return <h2>Ресурс не найден</h2>;

}
function App() {
  const [songs, setSongs] = useState([]);
  // const [isSongsLoad, setIsSongsLoad] = useState(true);
  const [fetchSongs, isSongsLoading, songError ] = useFetching (async () => {
    const response = await CaverServise.getCavers();
    setSongs(response.record.cavers)
  });
  // async function getCavers() {
  //   setIsSongsLoad(true)
  //   setTimeout(async() => {
      
  //   setIsSongsLoad(false)
  //   }, 1000)
   
// }
    useEffect(() => {
    fetchSongs()
    console.log()
}, [])

  return (  
    <Fragment>
       <HashRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Homepage />} />    
          {/* <Route exact path='/playlist' element={<PlayList />} />  */}
          <Route path="/cavers" element={<Cavers songs = {songs} isSongsLoading = {false}/>} />
          <Route path='/cavers/:id' element={<SingleOne songs = {songs} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </HashRouter>
    </Fragment>
   ); 
}

export default App;
