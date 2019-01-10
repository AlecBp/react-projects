import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
	getStyle = () => {
		if (this.props.todo.completed) {
			return ('completed')
		} else {
			return ('not-completed')
		}
	}

	render() {
		const { id, title } = this.props.todo;
		return (
			<div className={[this.getStyle(), "item"].join(' ')}>
				<p>
					<input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
					{' '}
					{title}
					<button className="btn" onClick={this.props.delTodo.bind(this, id)}>x</button>
				</p>
			</div>
		)
	}
}

// PropTypes
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
}

export default TodoItem
