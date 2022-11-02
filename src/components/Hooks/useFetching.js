import { useState } from "react"

export const useFetching = (callback) => {
const [isLoading, setIsloading] = useState(true);
const [error, setError] = useState('');

const fetching = async () => {
     setIsloading(true)
        console.log ("перед", isLoading)
    try {
       
        setTimeout(async() => {
      await callback()
      
      console.log ("полсле", isLoading)
              }, 1000)
        
        setIsloading(false)
    } catch(e) {
        setError(e.message);

    } finally {
        setIsloading(false)
    }   
}
return [fetching, isLoading, error]
}