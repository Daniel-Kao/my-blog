import { Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { getBlogs } from '../actions';
import './styles.less';

function Index(props) {
  // const { blog } = props;
  return (
    <div className="red">
      <Button type="primary">nihao</Button>
      {/* <span className="title">{blog.title}</span> */}
    </div>
  );
}

Index.getInitialProps = async ({ reduxStore, req }) => {
  await reduxStore.dispatch(getBlogs());

  return {};
};

export default connect()(Index);
