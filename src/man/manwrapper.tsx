import { connect } from "react-redux";
import { setName } from "../actions";
import Man from './man';

const mapDispatchToProps = (dispatch: any) => {
  return {
    onTodoClick: (name: string) => {
      dispatch(setName(name));
    }
  };
};

const mapStateToProps = (state: any) => {
  return {
    people: state.namesReducer
  };
};

const ManWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Man);

export default ManWrapper;
