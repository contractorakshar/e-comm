import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../Assets/4.1 crown.svg';
import { auth } from '../../Firebase/firebase.util';
import CartIcon from '../Cart-icon/Cart-icon';
import Cart from '../Cart/Cart';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../Redux/User/user.selector';
import { selectCartHidden } from '../../Redux/Cart/cart.selector';
import {
  HeaderContainer,
  OptionsContainer,
  OptionLink,
  LogoContainer,
} from './Header.style';

const HeaderComponent = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink className="option" to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink
          as="div"
          className="option"
          onClick={() => {
            auth.signOut();
          }}
        >
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      {}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <Cart />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(HeaderComponent);
