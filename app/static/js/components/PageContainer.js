import React, { Component } from 'react';

export class CustomComponent extends Component {
	render() {
		const { message } = this.props;
		return <div>{ message }</div>;
	}
}

export class PageContainer extends Component {
	render() {
		return (
			<div>
				<CustomComponent message="Your new app" />
			</div>
		)
	}
}
