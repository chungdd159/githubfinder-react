import React from 'react';
import PropTypes from 'prop-types';

const ReposItem = ({ item }) => {
  return (
    <div className="card mt-2 p-2">
      <a href={item.html_url}>{item.name}</a>
    </div>
  );
};

export default ReposItem;
ReposItem.propTypes = {
  item: PropTypes.object.isRequired,
};
