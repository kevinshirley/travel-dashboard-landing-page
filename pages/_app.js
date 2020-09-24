import React, { useEffect } from 'react';
import Layout from 'src/components/common/layout';
import Navbar from 'src/components/common/navbar';
import Footer from 'src/components/common/footer';
import ViewDemoModal from 'src/components/common/view-demo-modal';
import Fab from '@material-ui/core/Fab';
import { QUESTION_MARK_ICON } from 'src/components/material-ui/icons';
import I18n from 'src/lib/i18n';
import { trackPageView } from 'src/utils/google-helpers';
import Router from 'next/router';
import { ModalContextProvider } from 'src/store/context/modal-context-provider';

function Root({ Component, pageProps }) {

  return (
    <ModalContextProvider>
      <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>
        <div className='container layout'>
          <Navbar />
          <Layout>
            <div className='content'>
              <Component {...pageProps} />
            </div>
            <Footer />
          </Layout>
          <Fab aria-label='Call' className='phone-button-fixed' onClick={() => console.log('modal to schedule call')}>
            {QUESTION_MARK_ICON}
          </Fab>
        </div>
        <ViewDemoModal />
      </I18n>
    </ModalContextProvider>
  );
}

Root.getInitialProps = (async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { 
    pageProps
  };
});

export default Root;
