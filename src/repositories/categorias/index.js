import configs from '../../config';

function getName(valor){
    const url_categoria = configs.getUrlBackEnd('/categorias?titulo='+valor);

    return fetch(url_categoria)
    .then(async (dataServer) => {
        if(dataServer.ok){
            return await dataServer.json();        
        }
        throw new Error('Não foi possivel pegar os dados :()')
    });
}

function getAllWithVideo() {
    const url_categoria = configs.getUrlBackEnd('/categorias?_embed=videos');

    return fetch(url_categoria)
    .then(async (dataServer) => {
        if(dataServer.ok){
            return await dataServer.json();        
        }
        throw new Error('Não foi possivel pegar os dados :()')
    });
}

function create(objetoDoVideo) {
    const url_categoria = configs.getUrlBackEnd('/categorias');

    return fetch(url_categoria,{
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
export default  {getAllWithVideo, create, getName}
