import createReduxStore from '../../src/reduxStore';

describe( 'State Properties', () => {
  let reduxStore;

  beforeAll(() => reduxStore = createReduxStore());

  describe( '.isFetching', () => {
    it( 'should be present', () => {
      expect( reduxStore.getState()).toHaveProperty( 'isFetching' );
    });

    it( 'should initiate with a false value', () => {
      expect( reduxStore.getState().isFetching ).toBe( false );
    });
  });  

  describe( '.overviewData', () => {
    it( 'should be present', () => {
      expect( reduxStore.getState()).toHaveProperty( 'overviewData' );
    });

    it( 'should initiate with empty strings for all fields', () => {
      const expected = { artists: '', albums: '', genres: '', tracks: '' };

      expect( reduxStore.getState().overviewData ).toMatchObject( expected );
    });
  });  
});