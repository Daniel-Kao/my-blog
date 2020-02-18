import React, { Component } from "react";
import { connect } from "react-redux";
import { getBlogs } from "./actions";
import { bindActionCreators } from "redux";

class App extends Component {
  componentDidMount() {
    this.props.getBlogs();
  }
  render() {
    return <div className="App">123</div>;
  }
}

const mapStateToProps = state => ({
  blog: state.blog
});

const mapDispatchToProps = dispatch => ({
  getBlogs: bindActionCreators(getBlogs, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
