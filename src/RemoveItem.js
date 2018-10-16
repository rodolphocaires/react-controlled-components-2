import React from 'react';
import PropTypes from 'prop-types';

const RemoveItem = props => {
    return (
        <button onClick={props.onRemoveItem} disabled={props.isDisabled}>
            Delete Last Item
      </button>
    );
}

RemoveItem.propTypes = {
    onRemoveItem: PropTypes.func.isRequired,
    isDisabled: PropTypes.func.isRequired
};

export default RemoveItem;