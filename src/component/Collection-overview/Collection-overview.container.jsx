import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../Redux/Shop/Shop.selector';
import SpinnerComponent from '../../component/Spinner/Spinner';
import CollectionOverview from './Collection-overview';

const mapStateToPprops = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToPprops),
  SpinnerComponent
)(CollectionOverview);

export default CollectionOverviewContainer;
