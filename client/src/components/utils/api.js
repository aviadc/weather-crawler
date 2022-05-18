import axios from "axios";

let myUrl = 'http://localhost:5000/api/'; //development

if (process.env.NODE_ENV === 'production') {
  myUrl = 'api';   
}
const weatherApi =  axios.create({
  baseURL: myUrl,
});


export default weatherApi