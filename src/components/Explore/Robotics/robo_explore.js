import React, { Component } from 'react';
import {robo_explore_function} from './robo_explore_function';
import './robo_explore.css';
import './robo_explore_main.css'
import {BackToEvents} from '../../_BackToEvents/BackToEvents'
import {RoboticsCards} from './robo_cards'

class robo_explore extends Component {
	// constructor(props){
	// 	super(props);
	// }

	componentDidMount(){
		robo_explore_function();
	}

	render() {
		return (
			<div>
			<BackToEvents/>
			

			 <div className="robo_cont s--inactive">
			  <div className="robo_cont__inner">
			  	<RoboticsCards {...this.props} />
			  </div>
			</div>
			</div>

		)
	}
}

export default robo_explore;