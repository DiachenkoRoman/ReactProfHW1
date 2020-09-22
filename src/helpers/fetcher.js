export const fetchInf = (url) =>{
   return fetch(url)
       .then(response => response.json())
       .then(data => data)
}
