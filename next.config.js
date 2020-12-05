const path = require('path');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withVideos = require('next-videos');

module.exports = withVideos(
  withImages(
    withCSS(
      withSass({
        target: 'serverless',
        devIndicators: {
          autoPrerender: false,
        },
        webpack(config, options) {
          config.resolve.alias['src'] = path.join(__dirname, 'src');
          config.resolve.extensions.push('.js');
          return config;
        },
        experimental: {
          redirects() {
            return [
              {
                source: '/',
                permanent: true,
                destination: '/en',
              },
            ]
          },
        },
        env: {
          SOFTELO_AWS_ACCESS_KEY_ID: process.env.SOFTELO_AWS_ACCESS_KEY_ID,
          SOFTELO_AWS_SECRET_ACCESS_KEY: process.env.SOFTELO_AWS_SECRET_ACCESS_KEY,
          SOFTELO_AWS_REGION: process.env.SOFTELO_AWS_REGION,
          SOFTELO_TRIP_SEND_GRID_KEY_ID: process.env.SOFTELO_TRIP_SEND_GRID_KEY_ID,
        },
      }),
    ),
  ),
);
