import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CartItem from '../Cart-Item/Cart-Item';
import CustomButton from '../Custom-button/Custom-button';
import { selectCartItems } from '../../Redux/Cart/cart.selector.js';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../Redux/Cart/cart.action';
import './Cart.scss';

const Cart = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(Cart));
