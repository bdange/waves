import React, { Component } from 'react';
import PageTop from '../utils/page_top';

import ProdNfo from './prodNfo';
import ProdImg from './prodImg';

import { connect } from 'react-redux';
import { addToCart } from '../../actions/user_actions';
import {
  getProductDetail,
  clearProductDetail
} from '../../actions/products_actions';

class ProductPage extends Component {
  // fetch information from product
  componentDidMount() {
    const id = this.props.match.params.id;
    //check that we get the right id.
    //console.log(id);

    // dispatch product detail
    this.props.dispatch(getProductDetail(id)).then(response => {
      if (!this.props.products.prodDetail) {
        this.props.history.push('/');
      }
    });
  }

  // in order to remove product details
  componentWillMount() {
    this.props.dispatch(clearProductDetail());
  }

  addToCartHandler(id) {
    //console.log(id);
    this.props.dispatch(addToCart(id));
  }

  render() {
    return (
      <div>
        <PageTop title='Product detail' />
        <div className='container'>
          {// prodDetail coming from reducer
          this.props.products.prodDetail ? (
            <div className='product_detail_wrapper'>
              <div className='left'>
                <div style={{ width: '500px' }}>
                  <ProdImg detail={this.props.products.prodDetail} />
                </div>
              </div>
              <div className='right'>
                <ProdNfo
                  addToCart={id => this.addToCartHandler(id)}
                  detail={this.props.products.prodDetail} //coming from redux store
                />
              </div>
            </div>
          ) : (
            'loading'
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(ProductPage);
