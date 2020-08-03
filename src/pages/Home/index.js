import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';

function Home() {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    categoriasRepository.getAllWithVideo()
      .then((categoriasComVideo) => {
        setData(categoriasComVideo);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [])

  return (
    <>
      <Menu />
      {data.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={data[0].videos[0].titulo}
                url={data[0].videos[0].url}
                videoDescription={data[0].videos[0].titulo}
              />
              <Carousel
                ignoreFirstVideo
                category={data[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default Home;
