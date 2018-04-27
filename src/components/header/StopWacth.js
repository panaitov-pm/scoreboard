import React, {Component} from 'react';

class StopWacth extends Component {
	state = {
		running: false,
		elapsedTime: 0,
		prevTime: 0
	};
	
	componentDidMount() {
		this.interval = setInterval(this.onTick, 100);
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}

	onTick = () => {
		if(this.state.running) {
			const now = Date.now();
			this.setState(({elapsedTime, prevTime}) => ({
				elapsedTime: elapsedTime + (now - prevTime),
				prevTime: now
			}));
		}
	};

	handleStart = () => this.setState({
		running: true,
		prevTime: Date.now()
	});
	handleStop = () => this.setState({running: false});
	handleReset = () => this.setState({
		prevTime: Date.now(),
		elapsedTime: 0
	});

	render() {
		const seconds = Math.floor(this.state.elapsedTime / 1000);
		return (
			<div className="mt-5">
				<h4 className="text-center mb-3">Stopwatch&nbsp;
					<span className="text-danger">{seconds}</span> sec
				</h4>
				<div className="text-center">
					{
						(!this.state.running)
							? (<button onClick={this.handleStart} className="btn btn-primary mr-3">Start</button>)
							: (<button onClick={this.handleStop} className="btn btn-primary mr-3">Stop</button>)
					}
					<button onClick={this.handleReset}
					        className="btn btn-info">Reset
					</button>
				</div>
			</div>
		)
	}
}

export default StopWacth;