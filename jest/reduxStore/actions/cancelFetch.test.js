import createReduxStore from '../../../src/reduxStore';
import { cancelFetch } from '../../../src/reduxStore/actionCreators';

describe('Fetch', () => {
  let reduxStore;
  
  describe( 'when isFetching is false', () => {
    beforeEach(() => reduxStore = createReduxStore())

    it('should change the isFetching value to true', () => {
      reduxStore.dispatch( cancelFetch());
      
      expect( reduxStore.getState().isFetching ).toBe( false );
    })
  })

  describe( 'when isFetching is true', () => {
    beforeEach(() => reduxStore = createReduxStore({ isFetching: true }))

    it('should keep isFetching as true', () => {
      reduxStore.dispatch( cancelFetch());
      
      expect( reduxStore.getState().isFetching ).toBe( false );
    })
  })
})