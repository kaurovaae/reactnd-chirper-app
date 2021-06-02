import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import {handleInitialData} from "../actions/shared";
import {connect} from 'react-redux';
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import Nav from "./Nav";
import TweetPage from "./TweetPage";
import NewTweet from "./NewTweet";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        const {loading} = this.props;

        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <div className="container">
                        <Nav />
                        {!loading && (
                            <div>
                                <Route path="/" exact component={Dashboard} />
                                <Route path="/tweet/:id" component={TweetPage} />
                                <Route path="/new" component={NewTweet} />
                            </div>
                        )}
                    </div>
                </Fragment>
            </Router>
        )
    }
}

const mapStateToProps = ({authedUser}) => ({
    loading: authedUser === null
});

export default connect(mapStateToProps)(App);
