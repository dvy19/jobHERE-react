import axios from "axios";

const api = axios.create({
    baseURL: "https://your-backend-url.onrender.com/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;

/*

js library, used to send HTTP requests.
it handled all HTTP methods - GET, POST, PUT etc.
-promises
-automatic json parsin
-built-in error handling

axios => promise based http client for the browser and node.js.

cleaner alternative of fetch() 

easy asynchronous req handling
- interceptors
-timeouts and cancellation

============================================
============================================

this file = api gateway

creates a reusable axios instance.
just  import this instance in your components and use it to make API calls.

clean, consistent, and maintainable codebase.

Headers => extra info with requests and responses.

content type => tells the server what kind of data is being sent in the request body.

json type => data is in JSON format.

export => makes the axios instance available for import in other files.

======================================================================================================




*/