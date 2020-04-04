import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {HomePage as HomePageComponent} from './HomePage'
import * as actions from '../../action'

const mapStateToProps = (state) => {
    const { weather } = state;

    return {
        weatherConfig: weather,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            ...actions,
        }, dispatch)
    }
};

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageComponent);