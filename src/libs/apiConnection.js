const serverURL = 'http://xdata.simplesi.com.br:2001/tms/music';

const getResource = ( resource, options = {}) => {
  return fetch(
    `${serverURL}/${resource}${options.count ? '/$count' : ''}`,
    {
      method: 'GET'
    }
  );
};

export const getAlbumData = ( options = { count: true }) => {
  return getResource( 'Album', options );
};

export const getArtistData = ( options = { count: true }) => {
  return getResource( 'Artist', options );
};
export const getGenreData = ( options = { count: true }) => {
  return getResource( 'Genre', options );
};
export const getTrackData = ( options = { count: true }) => {
  return getResource( 'Track', options );
};