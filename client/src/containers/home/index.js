import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBlogs } from '../../actions';
import Home from '../../pages/Home';

const mapStateToProps = state => ({
  list: state.blog.list
});

const mapDispatchToProps = dispatch => ({
  getBlogs: bindActionCreators(getBlogs, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
