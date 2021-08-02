import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../Redux/Cart/cart.action';

import { ReactComponent as ShoppingIcon } from '../../Assets/11.3 shopping-bag.svg';

import { selectCartItemsCount } from '../../Redux/Cart/cart.selector';
import { createStructuredSelector } from 'reselect';

import './Cart-icon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
