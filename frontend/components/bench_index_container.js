import BenchIndex from './bench_index'
import { fetchBenches } from './actions/bench_actions';

const mapStateToProps = ({ benches }) => {
  return {
    state: benches
  }
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    fetchBenches: () => dispatch(fetchBenches())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);
