import React, {Component} from 'react'
import {handleInitialData} from "../actions/shared";
import {connect} from 'react-redux';
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        const {loading} = this.props;

        return (
            <div>
                <LoadingBar />
                {!loading && <Dashboard />}
            </div>
        )
    }
}

const mapStateToProps = ({authedUser}) => ({
    loading: authedUser === null
});

export default connect(mapStateToProps)(App);
