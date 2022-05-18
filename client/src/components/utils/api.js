import axios from "axios";

let myUrl = 'http://localhost:5000'; //development

if (process.env.NODE_ENV === 'production') {
  myUrl = '/';
}
const weatherApi =  axios.create({
  baseURL: myUrl,
});


export default weatherApi