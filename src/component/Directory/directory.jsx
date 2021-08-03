import React from 'react';
import MenuItem from '../Menu-item/menu-item';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../Redux/Directory/directory.selector';
import './directory.scss';
const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...sectionPorps }) => (
      <MenuItem key={id} {...sectionPorps} />
    ))}
  </div>
);
const mapStateToprops = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToprops)(Directory);
