import React, { Component } from 'react';
import MyButton from './button';

// we import redux as we need to dispatch an action.
import { connect } from 'react-redux';
import { addToCart } from '../../actions/user_actions'; // adding it to the user database

class Card extends Component {
  renderCardImage(images) {
    if (images.length > 0) {
      return images[0].url;
    } else {
      return '/images/image_not_available.png';
    }
  }

  render() {
    const props = this.props;
    return (
      <div className={`card_item_wrapper ${props.grid}`}>
        <div
          className='image'
          style={{
            background: `url(${this.renderCardImage(props.images)}) no-repeat`
          }}
        ></div>
        <div className='action_container'>
          <div className='tags'>
            <div className='brand'>{props.brand.name}</div>
            <div className='name'>{props.name}</div>
            <div className='name'>$ {props.price}</div>
          </div>

          {props.grid ? (
            <div className='description'>
              <p>{props.description}</p>
            </div>
          ) : null}
          <div className='actions'>
            <div className='button_wrapp'>
              <MyButton
                type='default'
                altClass='card_link'
                title='View product'
                linkTo={`/product_detail/${props._id}`}
                addStyles={{
                  margin: '10px 0 0 0'
                }}
              />
            </div>
            <div className='button_wrapp'>
              <MyButton
                //type == case in button.js
                type='bag_link'
                runAction={() => {
                  props.user.userData.isAuth
                    ? this.props.dispatch(addToCart(props._id))
                    : console.log('you need to log in');
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user // we need to check that the user is authenticated
  };
};

export default connect(mapStateToProps)(Card);