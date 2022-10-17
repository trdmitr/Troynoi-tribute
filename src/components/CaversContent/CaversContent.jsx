import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CaverServise from '../API/CaverServise';
// import JSONbin from './jsonbin-io'

const CaversContent = () => {
    const navigate = useNavigate();
    const [songs, setSongs] = useState([]);
   
    // async function fetchCavers() {
    //     const config = {
    //         headers: {
    //             'X-Access-Key': '$2b$10$uNKdqlNveTZfgBvIJNkSsedScM0e6eJ8wDkF8HSnAQOVtOZFHdDz.'
    //         },
    //     };
    //     axios
    //     .get("https://api.jsonbin.io/v3/b/63368779e13e6063dcbaecda", config)
        
                
    //                 .then(({data}) => {
    //                     setSongs(data)
    //                     console.log("data ", data.record.cavers)
    //                     console.log ("song1", songs[0].id)
    //                 })
    //                 .catch((error) => console.error(error))
            
    //     }
        
           
        
     useEffect(() => {
        const config = {
            headers: {
                'X-Access-Key': '$2b$10$uNKdqlNveTZfgBvIJNkSsedScM0e6eJ8wDkF8HSnAQOVtOZFHdDz.'
            },
        };
        axios
        .get("https://api.jsonbin.io/v3/b/63368779e13e6063dcbaecda", config)
        
                
                    .then(({data}) => {
                        setSongs(data.record.cavers)
                        console.log("data ", data.record.cavers)
                        console.log ("song", songs)
                    })
                    .catch((error) => console.error(error))

        }, []);
//     async function getCavers () {
//         const response = await CaverServise.getCavers();
//         setSongs(response.record.cavers)
        

//     }
       
//     useEffect(() => {
//         getCavers()
//     }, [])
const Content = useMemo(() => {
    // getCavers()
    console.log ("songs ", songs)
    {songs.map((caver) => (
        <div className="b-col" key={caver.index} onClick={() => navigate(`/cavers/${caver.id}`)}>   
                <div className="b-item"> 
                <img src={caver.photo} alt=""/> 
                                       
            </div>
            <p>{caver.name}</p>  
            </div>
             ))}
})
      
  return (
     <div className="b-row" >
   {Content}
    </div>

      
    
  )

}
export default CaversContent