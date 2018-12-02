import { 
  getResource, 
  updateResource, 
  newResource, 
  deleteResource
} from './apiConnection';

const RESOURCE = 'Artist';

export const getData = ( options = { count: true }) => {
  return getResource( RESOURCE, options );
};

export const updateData = ( id, data ) => {
  return updateResource( RESOURCE, id, data );
};

export const createRecord = ( data ) => {
  return newResource( RESOURCE, data );
};

export const destroyRecord = ( id ) => {
  return deleteResource( RESOURCE, id );
};