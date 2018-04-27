import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Stats = ({players}) => {
	const playersCount = players.length;
	const totalPoints = players.reduce((acc, player) => {return acc + player.score;}, 0);
	return (
		<Fragment>
			<h3 className="bg-primary text-white p-3 text-center mb-5">Players: <span className="ml-3">{playersCount}</span>
			</h3>
			<h3 className="bg-success text-white p-3 text-center">Total Points: <span className="ml-3">{totalPoints}</span>
			</h3>
		</Fragment>
	);
}

Stats.propTypes = {
	players: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
Stats.defaultProps = {};

export default Stats;

