const { createRedirect } = require('next-redirect');

module.exports = {
  async rewrites() {
    return [
      createRedirect({
        source: '/canvas',
        destination: '/',
        statusCode: 301, 
      }),
      createRedirect({
        source: '/contact',
        destination: '/about',
        statusCode: 301,
      }),
      createRedirect({
        source: '/buongiorno',
        destination: 'https://buongiorno-lilac.vercel.app/',
        statusCode: 301,
      }),
      createRedirect({
        source: '/visionary',
        destination: 'https://xd.adobe.com/view/33551c2d-dd7b-4b26-427f-fc11172e2a34-4564/?fullscreen',
        statusCode: 301,
      }),
      createRedirect({
        source: '/bojack-horseman',
        destination: 'https://vimeo.com/332264587',
        statusCode: 301,
      }),
      createRedirect({
        source: '/tim-cox',
        destination: 'https://vimeo.com/328321554',
        statusCode: 301,
      }),
      createRedirect({
        source: '/hollow-city',
        destination: 'https://www.nathanspinetti.com/HollowCity.pdf',
        statusCode: 301,
      }),
      createRedirect({
        source: '/dodough',
        destination: 'https://www.nathanspinetti.com/DoDough.pdf',
        statusCode: 301,
      }),
      createRedirect({
        source: '/binging-with',
        destination: 'http://bingeworthy.infinityfreeapp.com/',
        statusCode: 301,
      }),
    ];
  },
  reactStrictMode: true,
};
