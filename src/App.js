import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    items: [
      { id: 1, title: 'Wake Up Early' },
      { id: 2, title: 'Do some exercises' }
    ],
    id: uuidv4(),
    item: '',
    editItem: false
  };

  handleChange = e => {
    console.log('handle change');
  };

  handleSubmit = e => {
    console.log('handle submit');
  };

  clearList = () => {
    console.log('clear list');
  };

  handleDelete = id => {
    console.log(`handle edit ${id}`);
  };

  handleEdit = id => {
    console.log(`handle Edit for ${id}`);
  };

  render() {
    // console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <h3 className="text-capitalize text-center">todo list</h3>
            <TodoList
              items={this.state.items}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
              clearList={this.clearList}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
