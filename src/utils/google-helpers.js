export const trackPageView = (url) => {
  try {
    global.window.gtag('config', 'UA-XXXXXXXX-X', {
      page_location: url
    });
  } catch (error) {
    console.log('Google track page view error', error);
  }
}
