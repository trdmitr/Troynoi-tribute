import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Cavers from './components/Cavers/Cavers';
// import PlayList from './components/PlayList/PlayList';
import SingleOne from './components/SingleOne/SingleOne';
function NotFound() {
  return <h2>Ресурс не найден</h2>;
}
function App() {
  return (  
    <HashRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/cavers" element={<Cavers />} />
          {/* <Route exact path='/playlist' element={<PlayList />} /> */}
          <Route path='/cavers/:id' element={<SingleOne />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
