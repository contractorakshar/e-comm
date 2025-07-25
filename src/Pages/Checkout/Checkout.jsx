import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../component/Checkout-Item/Checkout-Item';
import StripeCheckoutButton from '../../component/Stripe-button/Stripe-button';
import {
  selectCartItems,
  selectCartTotal,
} from '../../Redux/Cart/cart.selector';
import './Checkout.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <>
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAl: ${total}</span>
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  </>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
