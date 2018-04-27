import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {generate as id} from 'shortid';

class AddPlayer extends Component {
	state = {
		playerName: '',
	};

	handleChangePlayerName = ({target}) => {
		this.setState({playerName: target.value});
	};

	handleAddPlayer = (e) => {
		e.preventDefault();
		const player = {id:id(), name: this.state.playerName, score: 0};
		this.props.onAddPLayer(player);
		this.setState({playerName: ''});
	};
	render() {
		return (
			<div className="mt-5">
				<form onSubmit={this.handleAddPlayer}>
					<div className="input-group">
						<input className="form-control"
						       placeholder="Player Name"
						       value={this.state.playerName}
								onChange={this.handleChangePlayerName}
						/>
							<div className="input-group-append">
								<input className="btn btn-primary"
								       type="submit"
								       value="Add Player" />
							</div>
					</div>
				</form>
			</div>
		)
	}
}

AddPlayer.propTypes = {
	onAddPLayer: PropTypes.func.isRequired,
};
AddPlayer.defaultProps = {};

export default AddPlayer;