import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SourceList from './SourceList';


const GroupList = ({ title, listSources, groups }) => {
  if (!groups || groups.length === 0) {
    groups = useSelector((state) => state.groups.user);
  }
  return (
    <div style={{ border: "1px solid #DDD", padding: "10px" }}>
      <h2>
        {title}
      </h2>
      <ul>
        {
          groups &&
          groups.map((group) => (
            <li key={group.id}>
              <Link to={`/group/${group.id}`}>
                {group.name}
              </Link>
              {
                listSources &&
                <SourceList sources={group.sources} showTitle={false} />
              }
            </li>
          ))
        }
      </ul>
    </div>
  );
};

GroupList.propTypes = {
  title: PropTypes.string.isRequired,
  listSources: PropTypes.bool,
  groups: PropTypes.arrayOf(PropTypes.object)
};
GroupList.defaultProps = {
  listSources: false,
  groups: []
};


export default GroupList;
