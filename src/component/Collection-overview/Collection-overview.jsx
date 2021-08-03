import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../Redux/Shop/Shop.selector';
import PreviewCollection from '../Preview-collection/Preview_collection';
import './Collection-overview.scss';

const CollectionsOverview = ({ collections }) => (
  <div className="Collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
