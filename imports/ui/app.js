import React from 'react';

import TitleBar from './titleBar';
import AddPlayer from './addPlayer';
import PlayerList from './playerList';

export default class App extends React.Component {
    render () {
        return (
            <div>
                <TitleBar title={this.props.title} subtitle="Created by Wayne."/>
                <div className="wrapper">
                    <PlayerList players={this.props.players}/>
                    <AddPlayer/>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    title: React.PropTypes.string.isRequired,
    players: React.PropTypes.object.isRequired
}
