// import {
//   selectIsCollectionFetching,
//   selectIsCollectionLoaded,
// } from '../../Redux/Shop/Shop.selector';
// import {
//   firestore,
//   convertCollectionsSnapShotToMap,
// } from '../../Firebase/firebase.util.js';
// import SpinnerComponent from '../../component/Spinner/Spinner';

// const CollectionOverviewWithSpinner = SpinnerComponent(CollectionOverview);

// const CollectionPageWithSpinner = SpinnerComponent(CollectionPage);
// state = {
//   loading: true,
// };
// unsubscribeFromSnapShot = null;
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
// render={(props) => (
//   <CollectionPageWithSpinner
//     isLoading={!isCollectionLoaded}
//     {...props}
//   />
// )}
// const { loading } = this.state;
import React from 'react';

import { Route } from 'react-router-dom';
import CollectionOverviewContainer from '../../component/Collection-overview/Collection-overview.container';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../Redux/Shop/shop.action';
import CollectionPageContainer from '../Collection/Collection.container';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
