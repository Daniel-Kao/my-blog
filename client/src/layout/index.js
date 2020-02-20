import { Avatar, Icon, Input, Layout } from 'antd';
import React, { useCallback, useState } from 'react';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import Container from '../components/container';
import './style.less';

const { Header, Footer, Content } = Layout;

export default ({ route }) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = useCallback(event => {
    setSearch(event.target.value);
  }, []);

  const handleOnSearch = useCallback(() => {}, []);

  return (
    <Layout>
      <Header>
        <Container renderer={<div className="header-inner" />}>
          <div className="header-left">
            <div className="logo">
              <Link to="/">
                <Icon type="github" className="github-icon" />
              </Link>
            </div>
            <div>
              <Input.Search
                placeholder="search"
                value={search}
                onChange={handleSearchChange}
                onSearch={handleOnSearch}
                loading={false}
              />
            </div>
          </div>
          <div className="header-right">
            <div className="user">
              <Avatar size="small" icon="user" />
            </div>
          </div>
        </Container>
      </Header>

      <Content>
        <Container renderer={<div style={{ marginTop: 32 }} />}>
          {renderRoutes(route.routes)}
        </Container>
      </Content>

      <Footer style={{ marginTop: 20, textAlign: 'center' }}>
        Design & Maintain @Daniel
      </Footer>
    </Layout>
  );
};
