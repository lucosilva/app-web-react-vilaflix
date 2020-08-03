const URL_BACKEND = 'http://localhost:3333';

function getUrlBackEnd(url){
    const concat = URL_BACKEND + url
    return concat;
}
export default {
    getUrlBackEnd
}