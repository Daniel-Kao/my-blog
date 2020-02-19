import { Card, Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = props => {
  const { getBlogs, list } = props;

  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  return (
    <div>
      <Row style={{ marginTop: 20 }} gutter={16}>
        {renderList(list)}
      </Row>
    </div>
  );
};

function renderList(list) {
  return list.map(item => (
    <Col key={item.id} span={12} style={{ marginTop: 20 }}>
      <Link to={`/blog?id=${item.id}`}>
        <Card title={item.title} bordered={false} hoverable>
          {item.desc}
        </Card>
      </Link>
    </Col>
  ));
}

export default Home;
