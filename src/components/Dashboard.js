import React, {Component} from 'react';
import {connect} from 'react-redux';

class Dashboard extends Component {
    render() {
        const {tweetIds} = this.props;

        return (
            <div>
                <h3 className='center'>Your Timeline</h3>
                <ul className='dashboard-list'>
                    {tweetIds.map(id => (
                        <li key={id}>Tweet ID: {id}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default connect(({tweets}) => ({
    tweetIds: Object.keys(tweets)
        .sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
}))(Dashboard);
