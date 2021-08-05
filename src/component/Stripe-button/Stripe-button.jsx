import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const pKey = '';
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <>
      <StripeCheckout
        label="Pay Now"
        name="e-comm"
        billingAddress
        shippingAddress
        description={`Your total is $${price} `}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={pKey}
      />
    </>
  );
};
export default StripeCheckoutButton;
