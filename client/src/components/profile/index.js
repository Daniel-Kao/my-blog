import { Avatar, Card, Icon } from 'antd';
import React from 'react';

const { Meta } = Card;

const Profile = () => {
  return (
    <div>
      <Card
        style={{ width: '100%' }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <Icon type="setting" key="setting" />,
          <Icon type="edit" key="edit" />
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
    </div>
  );
};

export default Profile;
