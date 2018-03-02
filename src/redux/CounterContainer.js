import {connect} from 'react-redux';
import Counter from "./Counter";

import {increment, decrement} from "./actions";


const mapStateToProps = (state) => {
    return {
        count: state.count
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        increment: (data) => dispatch(increment(data)),
        decrement: (data) => dispatch(decrement(data))
    }
}


const CounterContainer = connect(mapStateToProps,mapDispatchToProps)(Counter);

export default CounterContainer;

