import React from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import data from '../../data/dados_iniciais.json';

function Home() {
  return (
    <>
      <Menu />
      <BannerMain videoTitle={data.categorias[0].titulo} videoDescription={data.categorias[0].titulo} url={data.categorias[0].videos[0].url} />
      <Carousel ignoreFirstVideo="0" category={data.categorias[0]} />
      <Carousel ignoreFirstVideo="1" category={data.categorias[1]} />
      <Carousel ignoreFirstVideo="1" category={data.categorias[2]} />
      <Carousel ignoreFirstVideo="1" category={data.categorias[3]} />
      <Carousel ignoreFirstVideo="1" category={data.categorias[4]} />
      <Carousel ignoreFirstVideo="1" category={data.categorias[5]} />
      <Footer />
    </>
  );
}

export default Home;
