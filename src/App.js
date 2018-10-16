import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList from './ItemList';
import AddItem from './AddItem';
import RemoveItem from './RemoveItem';

class App extends React.Component {
    state = {
        value: '',
        items: [],
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    deleteLastItem = event => {
        this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
    };

    handleAddItem = (item) => {
        this.setState(prevState => ({ items: [...prevState.items, item] }));
    }

    noItemsFound = () => {
        return this.state.items.length === 0;
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <h2>Shopping List</h2>
                <AddItem onAddItem={this.handleAddItem}></AddItem>
                <RemoveItem onRemoveItem={this.deleteLastItem} isDisabled={this.noItemsFound()}></RemoveItem>
                <ItemList items={this.state.items}></ItemList>
            </div>
        );
    }
}

export default App;
