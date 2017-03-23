import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';

import {Players, calculatePlayerPositions} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';
import App from './../imports/ui/app'

Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find({},{sort:{score: -1}}).fetch();
        let positionedPlayers = calculatePlayerPositions(players);
        let title = 'Score Keep';
        ReactDom.render(<App players={positionedPlayers} title={title}/>, document.getElementById('app'));
    });
});
