import * as Leaderboards from './leaderboards.js';
import * as News from './news.js';
import * as Editor from './editor.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

console.log('Entry point');

const MainContainerPage = React.createClass({
	render: function () {
		return (
			<div className="innerMainContainer">
				<div className="pure-menu pure-menu-horizontal">
					<a href="#" className="pure-menu-heading">addy.ai</a>
					<ul className="pure-menu-list">
						<li className="pure-menu-item">
							<Link to="/" className="pure-menu-link">Home</Link>
						</li>
						<li className="pure-menu-item pure-menu-selected">
							<Link to="/news" className="pure-menu-link">News</Link>
						</li>
						<li className="pure-menu-item pure-menu-selected">
							<Link to="/editor" className="pure-menu-link">Editor</Link>
						</li>
						<li className="pure-menu-item">
							<a href="#" className="pure-menu-link">Contact</a>
						</li>
					</ul>
				</div>
				{this.props.children}
			</div>
		);
	}
});

const LeaderboardPage = React.createClass({
	render: function () {
		return (
			<div className="main">
				<div className="banner">
					<h1 className="banner-head">
						<span id="title">addy.ai</span><span id="subtitle"> baseball</span>
					</h1>
				</div>

				<div id="container">
					<div className="container">
						<div className="col-sm-3">
							<h2>Batting leaders</h2>
							<Leaderboards.TeamStatsBox
								url="/weeklyPlayerStats"
								categories={['R', 'HR', 'RBI', 'SB', 'OBP']}
								displayField="player_name"
							/>
						</div>

						<div className="col-sm-3">
							<h2>Pitching leaders</h2>
							<Leaderboards.TeamStatsBox
								url="/weeklyPlayerStats"
								categories={['K', 'W', 'SV', 'ERA', 'WHIP']}
								displayField="player_name"
							/>
						</div>

						<div className="col-md-6">
							<div className="col-sm-6">
								<h2>Team batting</h2>
								<Leaderboards.TeamStatsBox
									url="/stats"
									categories={['R', 'HR', 'RBI', 'SB', 'OBP']}
									displayField="team_name"
								/>
							</div>

							<div className="col-sm-6">
								<h2>Team pitching</h2>
								<Leaderboards.TeamStatsBox
									url="/stats"
									categories={['K', 'W', 'SV', 'ERA', 'WHIP']}
									displayField="team_name"
								/>
							</div>

							<div className="col-sm-12">
								<h2>Power rankings</h2>
								<Leaderboards.PRTeamListBox url="/powerRankings" pollInterval={5000} />
							</div>

							<div className="col-sm-12">
								<h2>Admin tools</h2>
								<ul>
									<li><a href="/populatePastStats">populate past stats</a></li>
									<li><a href="/populateCurrentStats">populate current stats</a></li>
									<li><a href="/populateCurrentPlayerStats">populate current player stats</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

const NewsPage = React.createClass({
	render: function () {
		return (
			<div className="main">
				<div className="banner">
					<h1 className="banner-head">
						<span id="title">addy.ai</span><span id="subtitle"> news </span>
					</h1>
				</div>

				<div id="container">
					<News.NewsContainer />
				</div>
			</div>
		);
	}
});

const EditorPage = React.createClass({
	render: function () {
		return (
			<div className="main">
				<div className="banner">
					<h1 className="banner-head">
						<span id="title">addy.ai</span><span id="subtitle"> editor </span>
					</h1>
				</div>

				<div id="quillContainer">
					<Editor.Editor />
				</div>
			</div>
		);
	}
});

ReactDOM.render((
	<Router history={browserHistory}>
		<Route component={MainContainerPage}>
			<Route path="/" component={LeaderboardPage} />
			<Route path="/news" component={NewsPage} />
			<Route path="/editor" component={EditorPage} />
		</Route>
	</Router>
), document.getElementById('mainContainer'));
