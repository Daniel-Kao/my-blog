import { Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import Examples from '../components/examples';
import { getBlogs } from '../store';
import './styles.less';

function Index(props) {
  const { blog } = props;
  return (
    <div className="red">
      <Button type="primary">nihao</Button>
      <Examples />
      <span className="title">{blog.title}</span>
    </div>
  );
}

Index.getInitialProps = async ({ reduxStore, req }) => {
  await reduxStore.dispatch(getBlogs());

  return {};
};

export default connect(state => ({ blog: state.list }))(Index);
