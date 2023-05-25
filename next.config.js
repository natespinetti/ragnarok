module.exports = {
  async redirects() {
    return [
      {
        source: '/canvas',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/buongiorno',
        destination: 'https://buongiorno-lilac.vercel.app/',
        permanent: true,
      },
      {
        source: '/visionary',
        destination: 'https://xd.adobe.com/view/33551c2d-dd7b-4b26-427f-fc11172e2a34-4564/?fullscreen',
        permanent: true,
      },
      {
        source: '/bojack-horseman',
        destination: 'https://vimeo.com/332264587',
        permanent: true,
      },
      {
        source: '/tim-cox',
        destination: 'https://vimeo.com/328321554',
        permanent: true,
      },
      {
        source: '/hollow-city',
        destination: 'https://www.nathanspinetti.com/HollowCity.pdf',
        permanent: true,
      },
      {
        source: '/dodough',
        destination: 'https://www.nathanspinetti.com/DoDough.pdf',
        permanent: true,
      },
      {
        source: '/binging-with',
        destination: 'http://bingeworthy.infinityfreeapp.com/',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
};
