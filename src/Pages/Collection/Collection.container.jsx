import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionLoaded } from '../../Redux/Shop/Shop.selector';
import SpinnerComponent from '../../component/Spinner/Spinner';
import CollectionPage from './Collection';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  SpinnerComponent
)(CollectionPage);

export default CollectionPageContainer;
