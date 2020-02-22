import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBlogById } from '../../actions';
import Blog from '../../pages/Blog';

const mapStateToProps = state => ({
  article: state.blog.article
});

const mapDispatchToProps = dispatch => ({
  getBlogById: bindActionCreators(getBlogById, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
