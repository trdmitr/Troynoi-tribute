import axios from 'axios'
// import React from 'react'

export default class CaverServise {
    static async getCavers() {
        const config = {
            headers: {
                'X-Access-Key': '$2b$10$uNKdqlNveTZfgBvIJNkSsedScM0e6eJ8wDkF8HSnAQOVtOZFHdDz.'
            },
        };
        try {
const response = await  axios.get("https://api.jsonbin.io/v3/b/634d91750e6a79321e2bb874", config)
      return response.data 
}
    
        catch(e) {console.log("error");
                                
    }
}
}