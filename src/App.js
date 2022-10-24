import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Cavers from './components/Cavers/Cavers';
// import PlayList from './components/PlayList/PlayList';
import SingleOne from './components/SingleOne/SingleOne';
import { Fragment, useEffect, useState } from 'react';
import CaverServise from './components/API/CaverServise';

function NotFound() {
  return <h2>Ресурс не найден</h2>;

}
function App() {
  const [songs, setSongs] = useState([]);
  async function getCavers() {
    const response = await CaverServise.getCavers();
    setSongs(response.record.cavers)
}
    useEffect(() => {
    getCavers()
}, [setSongs])

  return (  
    <Fragment>
  <getCavers/>
       <HashRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/cavers" element={<Cavers songs = {songs} />} />
          {/* <Route exact path='/playlist' element={<PlayList />} /> */}
          <Route path='/cavers/:id' element={<SingleOne songs = {songs} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </HashRouter>
 
    </Fragment>
   ); 
}

export default App;
