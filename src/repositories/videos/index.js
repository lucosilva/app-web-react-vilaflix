import configs from '../../config';

function create(objetoDoVideo) {
    const url_videos = configs.getUrlBackEnd('/videos?_embed=videos');

    return fetch(url_videos,{
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(objetoDoVideo),
    })
    .then(async (dataServer) => {
        if(dataServer.ok){
            return await dataServer.json();        
        }
        throw new Error('Não foi possivel cadastrar os dados :()')
    });
}
export default  {create}
