import React, {Component} from 'react';

import Header from './components/header';
import Player from './components/player';
import AddPlayer from './components/player/AddPlayer';
import data from './data';

class App extends Component {
	state = {
		players: []
	};

	componentDidMount() {
		this.setState({players: [...data.players]});
	}

	handleAddPlayer = (player) => {
		this.setState({players: [...this.state.players, player]});
	};
	handleRemovePlayer = (id) => {
		if(!window.confirm('Are you sure?')) return;
		this.setState(({players}) => ({
			players: players.filter(player => player.id !==id)}))
	};
	handleChangeScorePlayer = (id, delta) => {

		this.setState(({players}) => ({
			players: players.map(player => {
				if(player.id !==id) return player;
				return {...player, score: player.score += delta};
			})}))
	};
	render() {
		return (
			<div className="container">
				<h1 className="text-center mt-1 mb-3">Scoreboard</h1>
				<div className="row">
					<div className="col-sm-4">
						<Header players={this.state.players}/>
					</div>
					<div className="col-sm-8">
						<div className="grid">
							{
								this.state.players.map(player => (
									<Player key={player.id}
											player={player}
											onDeletePlayer={() => this.handleRemovePlayer(player.id)}
									        onChangeScorePlayer={(delta) => {this.handleChangeScorePlayer(player.id, delta)}}
									/>
								))
							}
						</div>
						<AddPlayer onAddPLayer={this.handleAddPlayer}/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
