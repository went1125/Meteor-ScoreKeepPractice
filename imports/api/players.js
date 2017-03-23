import {Mongo} from 'meteor/mongo'
import numeral from 'numeral';

export const Players = new Mongo.Collection('players');

export const calculatePlayerPositions = (players) => {
    let rank = 1;

    return players.map((player, index) => {
        rank = index + 1;

        return {
            rank,
            ...player,
            position: numeral(rank).format('0o')
        };
    });
}
