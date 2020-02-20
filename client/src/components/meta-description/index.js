import React from 'react';
import { timeDiff } from '../../utils/tools';
import './style.less';

const MetaDescription = ({ blog_updatedAt }) => {
  return (
    <div className="meta-description">
      <a className="tag">分享创造</a>
      {timeDiff(blog_updatedAt)}
    </div>
  );
};

export default MetaDescription;
