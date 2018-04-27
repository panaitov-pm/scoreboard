import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({score, onChangeScorePlayer}) => (
	<div className="counter">
		<button className="btn btn-outline-dark btn-sm"
				onClick={() => {onChangeScorePlayer(-1)}}
		> -</button>
		<div className="counter__item">{score}</div>
		<button className="btn btn-outline-dark btn-sm"
				onClick={() => {onChangeScorePlayer(1)}}
		> +</button>
	</div>
)

Counter.propTypes = {
	score: PropTypes.number.isRequired,
	onChangeScorePlayer: PropTypes.func.isRequired,
};

export default Counter;

