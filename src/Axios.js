import axios from "axios";

const instance = axios.create({
    baseURL: 'https://tinder-clone-backend-ruby.vercel.app/',
})

export default instance;