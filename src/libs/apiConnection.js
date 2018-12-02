const RESOURCES = {
  ALBUM: 'Album',
  ARTIST: 'Artist',
  GENRE: 'Genre',
  TRACK: 'Track',
};

const serverURL = 'http://xdata.simplesi.com.br:2001/tms/music';

const urlBuilder = ( resource, options ) => {
  if( options.count ){
    return (
      `${serverURL}/${resource}/$count` 
    );
  }else{
    let baseUrl = `${serverURL}/${resource}/?`;

    if( options.top ) baseUrl += `$top=${options.top}`;
    if( options.top ) baseUrl += `&$skip=${options.skip}`;

    return baseUrl;
  }
};

const getResource = ( resource, options = {}) => {
  return fetch(
    urlBuilder( resource, options ),
    {
      method: 'GET'
    }
  );
};

const updateResource = ( resource, id, data ) => {
  return fetch(
    `${serverURL}/${resource}(${id})`,
    {
      method: 'PATCH',
      body: JSON.stringify( data ),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
};

const newResource = ( resource, data ) => {
  return fetch(
    `${serverURL}/${resource}`,
    {
      method: 'POST',
      body: JSON.stringify( data ),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
};

const deleteResource = ( resource, id ) => {
  return fetch(
    `${serverURL}/${resource}(${id})`,
    {
      method: 'DELETE',
    }
  );
};

export const getAlbumData = ( options = { count: true }) => {
  return getResource( RESOURCES.ALBUM, options );
};

export const getArtistData = ( options = { count: true }) => {
  return getResource( RESOURCES.ARTIST, options );
};

export const getGenreData = ( options = { count: true }) => {
  return getResource( RESOURCES.GENRE, options );
};

export const updateGenreData = ( id, data ) => {
  return updateResource( RESOURCES.GENRE, id, data );
};

export const newGenre = ( data ) => {
  return newResource( RESOURCES.GENRE, data );
};

export const deleteGenre = ( id ) => {
  return deleteResource( RESOURCES.GENRE, id );
};

export const getTrackData = ( options = { count: true }) => {
  return getResource( RESOURCES.TRACK, options );
};