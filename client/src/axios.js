import axios from 'axios';
 const instance=axios.create({
     baseURL: 'https://tinder-clone-ab.herokuapp.com/'
 })

 export default instance;