import React from 'react';
import {Players} from './../api/players'


export default class AddPlayer extends React.Component {

    submitHandle (e) {
        e.preventDefault();
        playerName = e.target.playerName.value;
        if(playerName) {
            e.target.playerName.value = '';
            Players.insert({
                name: playerName,
                score: 0
            });
        }
    }

    render() {
        return(
            <div className="item">
                <form className="form" onSubmit={this.submitHandle}>
                    <input className="form__input" type="text" name="playerName" placeholder="Player name"/>
                    <button className="button">Add Player</button>
                </form>
            </div>
        );
    }

}
