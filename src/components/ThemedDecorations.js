import React from 'react';

class ThemedDecorations extends React.Component {

	render() {
		let theme = this.props.theme
		return (
			<div>
				{this.props.children.map(child => {
					return <div className={theme}>child</div>
				})}
			</div>
		)
	}
}

export default ThemedDecorations