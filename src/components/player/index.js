import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';

const Player = ({player, onDeletePlayer, onChangeScorePlayer}) => (
	<Fragment>
		<div className="grid-left">
			<a className="remove-link text-danger mr-3"
				onClick={onDeletePlayer}
			>&times;</a>
			<div className="player-name">{player.name}</div>
		</div>
		<Counter score={player.score}
		         onChangeScorePlayer={onChangeScorePlayer}
		/>
	</Fragment>
);

Player.propTypes = {
	player: PropTypes.shape({
	    name: PropTypes.string.isRequired,
		score: PropTypes.number.isRequired,
	}).isRequired,
	onDeletePlayer: PropTypes.func.isRequired,
	onChangeScorePlayer: PropTypes.func.isRequired,
};

export default Player;

