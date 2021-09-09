import React from 'react';
import { createStructuredSelector } from 'reselect';

import { Route } from 'react-router-dom';
import CollectionOverview from '../../component/Collection-overview/Collection-overview';
import { connect } from 'react-redux';
import CollectionPage from '../Collection/Collection';
import {
  selectIsCollectionFetching,
  selectIsCollectionLoaded,
} from '../../Redux/Shop/Shop.selector';
import { fetchCollectionsStartAsync } from '../../Redux/Shop/shop.action';
// import {
//   firestore,
//   convertCollectionsSnapShotToMap,
// } from '../../Firebase/firebase.util.js';
import SpinnerComponent from '../../component/Spinner/Spinner';

const CollectionOverviewWithSpinner = SpinnerComponent(CollectionOverview);
const CollectionPageWithSpinner = SpinnerComponent(CollectionPage);
class ShopPage extends React.Component {
  // state = {
  //   loading: true,
  // };
  // unsubscribeFromSnapShot = null;

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection('collections');
    // // fetch('https://firestore.googleapis.com/v1/projects/react-e-comm/databases/(default)/documents/collections')
    // // .then(res=>res.json())
    // // .then(collections=>console.log(collections))
    // // collectionRef.onSnapshot(async)
    // collectionRef.get().then((snapShot) => {
    //   const collectionMap = convertCollectionsSnapShotToMap(snapShot);
    //   updateCollections(collectionMap);
    //   this.setState({ loading: false });
    // });
  }
  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props;
    // const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}
const mapStateTopProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});
export default connect(mapStateTopProps, mapDispatchToProps)(ShopPage);
