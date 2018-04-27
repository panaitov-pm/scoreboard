import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats';
import StopWacth from './StopWacth';

const Header = ({players}) => (
	<div className="header">
		<Stats players={players}/>
		<StopWacth />
	</div>
);

Header.propTypes = {
	players: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Header;

