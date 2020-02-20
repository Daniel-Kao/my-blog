import { Avatar, Card, Icon } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

const { Meta } = Card;

const Profile = () => {
  const history = useHistory();
  return (
    <Card
      style={{ width: '100%' }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <Icon type="edit" key="edit" onClick={() => history.push('/create')} />,
        <Icon type="setting" key="setting" />
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title="Daniel Kao"
        description=""
      />
    </Card>
  );
};

export default Profile;
