import React from 'react';
import { Link } from 'react-router-dom';
import { timeDiff } from '../../utils/tools';
import './style.less';

const MetaDescription = ({ blog_updatedAt }) => {
  return (
    <div className="meta-description">
      <Link className="tag" to="/">
        分享创造
      </Link>
      &nbsp;·&nbsp;
      <Link className="name" to="/">
        daniel kao
      </Link>
      &nbsp;·&nbsp;
      <span>{timeDiff(blog_updatedAt)}</span>
    </div>
  );
};

export default MetaDescription;
