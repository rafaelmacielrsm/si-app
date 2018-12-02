import { setMessage, clearMessage } from '../actionCreators';

export const showMessage = ( message ) => ( dispatch ) => {
  dispatch( setMessage( message ));

  setTimeout(() => dispatch( clearMessage()), 1500 );
};