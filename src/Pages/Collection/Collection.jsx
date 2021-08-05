import './Collection.scss';
import { connect } from 'react-redux';
import CollectionItem from '../../component/Collection-item/Collection-item';
import { selectCollection } from '../../Redux/Shop/Shop.selector';
const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToprops = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToprops)(CollectionPage);
