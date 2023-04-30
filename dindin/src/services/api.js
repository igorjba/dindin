import axios from 'axios';

export default axios.create({
    baseURL: 'http://desafio-backend-03-dindin.pedagogico.cubos.academy',
    timeout: 10000,
    headers: { 'Content-type': 'application/json' }
});