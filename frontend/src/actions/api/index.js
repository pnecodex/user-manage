import axios from 'axios';


// const composeToken = (token) => token && {Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiYWRuYW5hbGlrQGdtYWlsLmNvbSIsImlhdCI6MTYxMjE2NTkxOCwiZXhwIjoxNjEyMjUyMzE4fQ.qe5Je2FAYQfha3QvB3OeWsYfUejRtvrjJ1OaVYTlw80` } ;
const composeToken = (token) => token ? {Authorization:`Bearer ${token}` } : "not";
// console.log(...composeToken('token'),'token gent');
const apiCall = (url, method, body = {}, token = '') => axios({
    method,
    url:`http://localhost:8000/api${url}`,
    data:body,
    headers:{
        ...composeToken(token)
    },  
});
export default apiCall;