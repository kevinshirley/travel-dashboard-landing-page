import React, { useEffect } from 'react';
import Router from 'next/router';
import HomeSection1 from 'src/components/home/home-section-1';

function Home() {
  useEffect(() => {
    const { asPath } = Router;
    console.log({ asPath, Router });
    if (asPath == '/' ) {
      Router.push('/en');
    }
  });

  return (
    <>
      <HomeSection1 />
    </>
  );
};

export default Home;
