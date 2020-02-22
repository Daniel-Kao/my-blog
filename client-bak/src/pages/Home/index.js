import { Avatar, Col, List, Row } from 'antd';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MetaDescription from '../../components/meta-description';
import Profle from '../../components/profile';
import './style.less';

const Home = props => {
  const { getBlogs, list } = props;

  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  return (
    <div className="home">
      <Row gutter={[{ xs: 0, sm: 0, md: 24, lg: 24 }, 0]}>
        <Col xs={24} sm={24} md={18} lg={18} xl={18} className="content-left">
          {renderList(list)}
        </Col>
        <Col xs={0} sm={0} md={6} lg={6} xl={6}>
          <Profle />
        </Col>
      </Row>
    </div>
  );
};

function renderList(data) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => {
        return (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<Link to="/blog?id=1">{item.blog_title}</Link>}
              description={
                <MetaDescription blog_updatedAt={item.blog_updatedAt} />
              }
            />
          </List.Item>
        );
      }}
    />
  );
}

export default Home;
