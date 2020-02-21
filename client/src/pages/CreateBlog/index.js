import { Col, Divider, Row } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MarkDownSpec from '../../components/markdown-spec';
import './style.less';

const CreateBlog = ({ createBlog }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function onInputChange(e) {
    setTitle(e.target.value);
    setTimeout(() => {
      createBlog({ title: '123', content: '12345' });
    }, 1000);
  }
  function onTextAreaChange(e) {
    setContent(e.target.value);
  }

  return (
    <div className="create-blog">
      <Row gutter={[{ xs: 0, sm: 0, md: 24, lg: 24 }, 0]}>
        <Col xs={24} sm={24} md={17} lg={17} xl={17} className="content-left">
          <div className="cell">
            <Link to="/">主页</Link>
            <span className="chevron">&nbsp;›&nbsp;</span>
            创作新主题
          </div>
          <Divider />
          <div className="cell">主题标题</div>
          <Divider />
          <input
            type="text"
            className="cell"
            onChange={onInputChange}
            value={title}
          />
          <Divider />
          <div className="cell">正文</div>
          <Divider />
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="10"
            value={content}
            onChange={onTextAreaChange}
          ></textarea>
        </Col>
        <Col xs={0} sm={0} md={7} lg={7} xl={7}>
          <MarkDownSpec />
        </Col>
      </Row>
    </div>
  );
};

export default CreateBlog;
