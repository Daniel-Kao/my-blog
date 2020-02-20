import React, { useEffect } from 'react';
import MarkDown from 'react-markdown';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Blog = props => {
  const { article } = props;
  const query = useQuery();
  const id = query.get('id');
  console.log(id);

  useEffect(() => {
    props.getBlogById(id);
  }, []);

  return (
    <div>
      <MarkDown source={article.content} />
    </div>
  );
};

export default Blog;
