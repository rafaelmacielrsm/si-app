import createReduxStore from '../../src/reduxStore';

describe('Store Properties', () => {
  let reduxStore;

  beforeAll(() => reduxStore = createReduxStore())

  describe( '.getState', () => {
    it('should be present', () => {
      expect( reduxStore ).toHaveProperty( 'getState' );
    })

    it('should be of type function', () => {
      expect( typeof reduxStore.getState ).toBe( 'function' );
    })
  })

  describe( '.dispatch', () => {
    it('should be present', () => {
      expect( reduxStore ).toHaveProperty( 'dispatch' );
    })

    it('should be of type function', () => {
      expect( typeof reduxStore.dispatch ).toBe( 'function' );
    })
  })
})
