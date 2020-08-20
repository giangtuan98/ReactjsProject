/**
 *
 * ProductDetail
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectProductDetail from './selectors';
import reducer from './reducer';
import saga from './saga';

import ProductDetailComponent from '../../components/ProductDetail';
import TitleBar from '../../components/Shared/TitleBar';

export function ProductDetail() {
  useInjectReducer({ key: 'productDetail', reducer });
  useInjectSaga({ key: 'productDetail', saga });

  return (
    <>
      <TitleBar />
      <ProductDetailComponent />
    </>
  );
}

ProductDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  productDetail: makeSelectProductDetail(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ProductDetail);
