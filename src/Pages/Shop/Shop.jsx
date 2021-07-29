import React from 'react';
import SHOP_DATA from './Shop.data';
import PreviewCollection from '../../component/Preview-collection/Preview_collection';
class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <>
        <div className="shop-page">
          {collections.map(({ id, ...otherCollectionProps }) => (
            <PreviewCollection key={id} {...otherCollectionProps} />
          ))}
        </div>
      </>
    );
  }
}
export default ShopPage;
