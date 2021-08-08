import React from 'react';

import { Route } from 'react-router-dom';
import CollectionOverview from '../../component/Collection-overview/Collection-overview';
import { connect } from 'react-redux';
import CollectionPage from '../Collection/Collection';
import { updateCollections } from '../../Redux/Shop/shop.action';
import {
  firestore,
  convertCollectionsSnapShotToMap,
} from '../../Firebase/firebase.util.js';
import SpinnerComponent from '../../component/Spinner/Spinner';

const CollectionOverviewWithSpinner = SpinnerComponent(CollectionOverview);
const CollectionPageWithSpinner = SpinnerComponent(CollectionPage);
class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapShot) => {
      const collectionMap = convertCollectionsSnapShotToMap(snapShot);
      updateCollections(collectionMap);
      this.setState({ loading: false });
    });
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
