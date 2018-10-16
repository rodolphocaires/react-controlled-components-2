import React, { Component } from 'react';
import PropTypes from 'prop-types';


class AddItem extends Component {
    state = {
        value: ''
    }

    addItem = event => {
        event.preventDefault();
        this.props.onAddItem(this.state.value);
    };

    handleChange = (value) => {
        this.setState({ value: value });
    }

    inputIsEmpty = () => {
        return this.state.value === '';
    };

    render() {
        return (
            <div>
                <form onSubmit={this.addItem}>
                    <input
                        type="text"
                        placeholder="Enter New Item"
                        value={this.state.value}
                        onChange={(event) => this.handleChange(event.target.value)}
                    />
                    <button disabled={this.inputIsEmpty()}>Add</button>
                </form>
            </div>
        )
    }
}

AddItem.propTypes = {
    onAddItem: PropTypes.func.isRequired
};

export default AddItem;