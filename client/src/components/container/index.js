import React, { cloneElement } from 'react';

const style = {
  width: '100%',
  height: '100%',
  maxWidth: 1200,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 20,
  paddingRight: 20
};

export default ({ children, renderer = <div /> }) => {
  return cloneElement(renderer, {
    style: Object.assign({}, renderer.props.style, style),
    children
  });
};
