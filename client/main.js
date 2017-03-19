import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';
import TitleBar from './../imports/ui/titleBar';;

const renderPlayers = (playerList) => {
    return playerList.map((player) => {
        return (
            <p key={player._id}>
                {player.name} has {player.score} point(s).
                <button onClick={() => Players.update({_id: player._id}, {
                    $inc: {score: 1}
                })}>+1</button>
                <button onClick={() => Players.update({_id: player._id}, {
                    $inc: {score: -1}
                })}>-1</button>
                <button onClick={() => Players.remove({_id: player._id})}>X</button>
            </p>
        );
    });
}

const submitHandle = (e) => {
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

Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find().fetch();
        let title = 'Score keep'
        let name = 'Wayne';
        let jsx = (
            <div>
                <TitleBar title={title} subtitle='Made by Wayne'/>
                <p>{renderPlayers(players)}</p>
                <form onSubmit={submitHandle}>
                    <input type="text" name="playerName" placeholder="Player name"/>
                    <button>add Player</button>
                </form>
            </div>
        );
        ReactDom.render(jsx, document.getElementById('app'));
    });
});
