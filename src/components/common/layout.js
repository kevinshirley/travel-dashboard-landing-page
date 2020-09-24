import React, { useEffect } from 'react';
import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'src/styles/app.scss';

import useI18n from 'src/hooks/use-i18n';
const { NODE_ENV } = process.env;

function Layout(props) {
  const i18n = useI18n();

  useEffect(() => {
    console.log({ NODE_ENV });
  });

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>{i18n.t('meta.title')}</title>
        <meta name="description" content={i18n.t('meta.description')}></meta>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" type='text/css' />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" type='text/css' />
        <script src="https://code.iconify.design/1/1.0.3/iconify.min.js"></script>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.12/css/all.css" integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9"></link>
        {/* <script src="https://kit.fontawesome.com/a19f8eb38c.js" crossOrigin="anonymous"></script> */}
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
      </Head>
      <div className='main-content'>
        {props.children}
      </div>
    </>
  );
};

export default Layout;