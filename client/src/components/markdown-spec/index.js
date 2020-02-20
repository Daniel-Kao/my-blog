import { Divider } from 'antd';
import React from 'react';

const bodyStyle = {
  padding: 10
};

const MarkDownSpec = () => {
  return (
    <div>
      <div style={{ backgroundColor: '#fff', color: '#111' }}>
        <div style={{ padding: 10, fontSize: 14 }}>发帖提示</div>
        <Divider />
        <div style={bodyStyle}>
          <ul style={{ padding: 0, margin: '0 0 16px 16px' }}>
            <li>
              <span>主题标题</span>
              <div style={{ height: 10 }}></div>
              <div className="content">
                请在标题中描述内容要点。如果一件事情在标题的长度内就已经可以说清楚，那就没有必要写正文了。
              </div>
              <div style={{ height: 10 }}></div>
            </li>
            <li>
              <span>正文</span>
              <div style={{ height: 10 }}></div>

              <div className="content">
                可以在正文中为你要发布的主题添加更多细节。V2EX 支持 GitHub
                Flavored Markdown 文本标记语法。
              </div>
              <div style={{ height: 10 }}></div>
              <div className="content">
                在正式提交之前，你可以点击本页面左下角的“预览主题”来查看
                Markdown 正文的实际渲染效果。
              </div>
              <div style={{ height: 10 }}></div>
            </li>
            <li>
              <span>选择节点</span>
              <div style={{ height: 10 }}></div>
              <div className="content">
                在最后，请为你的主题选择一个节点。恰当的归类会让你发布的信息更加有用。
              </div>
              <div className="content">
                你可以在主题发布后 300 秒内，对标题或者正文进行编辑。同时，在
                300 秒内，你可以重新为主题选择节点。
              </div>
              <div style={{ height: 10 }}></div>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ height: 20 }}></div>
      <div style={{ backgroundColor: '#fff', color: '#111' }}>
        <div style={{ padding: 10, fontSize: 14 }}>社区指导原则</div>
        <Divider />
        <div style={bodyStyle}>
          <ul style={{ padding: 0, margin: '0 0 16px 16px' }}>
            <li>
              <span>尊重原创</span>
              <div style={{ height: 10 }}></div>
              <div className="content">
                请不要在 V2EX 发布任何盗版下载链接，包括软件、音乐、电影等等。
              </div>
              <div className="content">
                V2EX 是创意工作者的社区，我们尊重原创。
              </div>
              <div style={{ height: 10 }}></div>
            </li>
            <li>
              <span>友好互助</span>
              <div style={{ height: 10 }}></div>
              <div className="content">
                保持对陌生人的友善。用知识去帮助别人。
              </div>

              <div style={{ height: 10 }}></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MarkDownSpec;
