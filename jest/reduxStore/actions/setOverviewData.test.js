import createReduxStore from '../../../src/reduxStore';
import { setOverViewData } from '../../../src/reduxStore/actionCreators';
import sampleSize from 'lodash/sampleSize';
import { random } from 'faker';

describe( 'setOverviewData', () => {
  let reduxStore;

  describe( 'when the payload change all values', () => {
    let payload;

    beforeEach(() => {
      reduxStore = createReduxStore();

      payload = {
        tracks: `${random.number( 100 )}`,
        artists: `${random.number( 100 )}`,
        albums: `${random.number( 100 )}`,
        genres: `${random.number( 100 )}`,
      };
    });

    it( 'should change all values to match the payload', () => {
      const expected = payload;

      reduxStore.dispatch( setOverViewData( payload ));
      
      expect( reduxStore.getState().overviewData ).toMatchObject( expected );
    });
  });

  describe( 'when the payload do not change all values in the payload', () => {
    let payload = {};
    const initialValue = '100';
    const numberOfFieldsToChange = random.number({ min: 1, max: 3 });

    beforeEach(() => {
      reduxStore = createReduxStore({ 
        overviewData: {
          tracks: initialValue,
          artists: initialValue,
          albums: initialValue,
          genres: initialValue,
        }
      });

      sampleSize([ 'tracks', 'artists', 'albums', 'genres' ], 
        numberOfFieldsToChange )
        .forEach( option => {
          payload[ option ] = `${random.number( initialValue - 1 )}`;
        });
    });

    it( 'should change only the values', () => {
      reduxStore.dispatch( setOverViewData( payload ));

      const { overviewData } = reduxStore.getState();      
      const tested = Object.values( overviewData ).reduce(
        ( prev, cur ) => cur !== initialValue ? prev + 1 : prev,
        0
      );
      
      expect( tested ).toBe( numberOfFieldsToChange );
    });
  });
});