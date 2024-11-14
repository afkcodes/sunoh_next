const baseURL = 'https://sunoh-api.vercel.app';
const proxyImageURL = 'https://sunoh-api.vercel.app/proxy?url=';
const endpoints = {
  saavn: {
    home: `${baseURL}/saavn`,
    modules: `${baseURL}/modules`,
    album: `${baseURL}/saavn/album`,
    playlist: `${baseURL}/saavn/playlist`,
    artist: `${baseURL}/saavn/artist`,
    mix: `${baseURL}/saavn/mix`,
    createStation: `${baseURL}/saavn/create_station`,
    getStationSongs: `${baseURL}/saavn/get_station_songs`,
    search: `${baseURL}/saavn/search`,
  },
  gaana: {
    track: `${baseURL}/gaana/track`,
    radio: {
      popular: `${baseURL}/gaana/radios/popular`,
      detail: `${baseURL}/gaana/radio`,
    },
  },
};

export { baseURL, endpoints, proxyImageURL };
