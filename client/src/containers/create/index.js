import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createBlog } from '../../actions';
import CreateBlog from '../../pages/CreateBlog';

const mapDispatchToProps = dispatch => ({
  createBlog: bindActionCreators(createBlog, dispatch)
});

export default connect(null, mapDispatchToProps)(CreateBlog);
