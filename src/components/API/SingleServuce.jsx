import React from 'react'
import axios from 'axios'

export const SingleServuce = () => {
    const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [singl, setSingl] = useState([]);
  const config = {
    headers: {
        'X-Access-Key': '$2b$10$uNKdqlNveTZfgBvIJNkSsedScM0e6eJ8wDkF8HSnAQOVtOZFHdDz.'
    },
};
  useEffect(() => {
    const apiUrl = 'https://api.jsonbin.io/v3/b/634d91750e6a79321e2bb874';
    axios.get(apiUrl, config)
    .then((response) => {
    //   const allCavers = response.data;
    setIsLoaded(true);
      setSingl(response.data);
    }).catch(error => {
        setIsLoaded(true);
        setError(error);
      });
  }, [setSingl]);
//   if (error) return `Error: ${error.message}`;
//   if (!singl) return "Нет данных!";
if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
    <div>SingleServuce</div>
  )
  }
  
}
