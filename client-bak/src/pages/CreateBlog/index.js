import { Col, Divider, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MarkDownSpec from '../../components/markdown-spec';
import { useDebounce } from '../../hooks';
import './style.less';

const CreateBlog = ({ createBlog }) => {
  const [state, setState] = useState({
    title: '',
    content: ''
  });
  const debounceSearchTerm = useDebounce(state, 1000);

  useEffect(() => {
    if (debounceSearchTerm) {
      createBlog({ ...state });
    }
  }, [debounceSearchTerm]);

  async function onChange(e) {
    const { name, value } = e.target;
    await setState(prevState => ({
      ...prevState,
      [name]: value
    }));
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
            name="title"
            onChange={onChange}
            value={state.title}
          />
          <Divider />
          <div className="cell">正文</div>
          <Divider />
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="10"
            value={state.content}
            onChange={onChange}
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
