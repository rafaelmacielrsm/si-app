import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { defaultBtnStyle, colorPallete } from '../../../assets/css-utils';
import PropTypes from 'prop-types';

class TableControls extends React.PureComponent {
  render() {
    const { 
      resourceCount, 
      queryOptions: { top, currentPage }, 
      newRecordHandler } = this.props;

    return (
      <div className={ css( styles.action )} >
        <span 
          onClick={() => newRecordHandler()}
          className={ css( styles.btn )} >
          New
        </span>

        <div className={ css( styles.pagination )} >
          <button 
            disabled={ currentPage === 0 }
            onClick={() => this._changePage( currentPage - 1 )}
            className={ css( 
              styles.paginationBtn, 
              currentPage === 0 && styles.disable )} >

            {'<'}
          </button>

          <select 
            onChange={this._selectionHandler}
            value={currentPage}
            className={ css( styles.pageInput )} >
            {
              this._selectionOptions( resourceCount, top )
                .map( opt => (
                  <option 
                    key={opt} 
                    value={`${opt}`}>

                    {`P ${opt+1}`}
                  </option>
                ))
            }
          </select> 

          <button
            disabled={ currentPage === Math.ceil( resourceCount / top ) - 1}
            onClick={() => this._changePage( currentPage + 1 )}
            className={ css( 
              styles.paginationBtn,
              currentPage === Math.ceil( resourceCount / top ) -1 && styles.disable 
            )} >

            {'>'}
          </button>
        </div>
      </div>
    );
  }

  _changePage = ( page ) => {
    this.props.pageSelectionHandler( Number.parseInt( page ));
  }

  _selectionHandler = ( ev ) => {
    let selectedValue = ev.target.options[ ev.target.selectedIndex ].value;

    this.props.pageSelectionHandler( Number.parseInt( selectedValue ));
  }

  _selectionOptions = ( total, perPage ) => (
    Array.from( 
      Array( Math.ceil( total / perPage )), 
      ( e, i ) => i 
    )
  )
}

const styles = StyleSheet.create({
  action: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: '2% 2% 0 2%',
  },

  pagination: {
    display: 'flex',
    flexDirection: 'row',
  },

  paginationBtn: {
    ...defaultBtnStyle,
    margin: 0,
    color: colorPallete.primaryTextColor,
    height: '40px',
    padding: 0,
    minWidth: '40px !important',
  },

  pageInput: {
    margin: '0 .5em',
    height: '40px !important',
    textAlign: 'center',
  },

  btn: {
    color: 'white',
    ...defaultBtnStyle,
    margin: 0,
  },

  disable: {
    backgroundColor: 'gray !important',
  },
});

TableControls.propTypes = {
  newRecordHandler: PropTypes.func.isRequired,
  resourceCount: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  queryOptions: PropTypes.object,
  pageSelectionHandler: PropTypes.func.isRequired,
};

export default TableControls;