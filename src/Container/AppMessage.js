import React from 'react';
import MessagesList from '../Presentational/MessagesList';
import NewMessage from '../Presentational/NewMessage';

/**
 * React Class. description of the object message and different methods.
 * 
 * @param  {Function} `handleChange`
 * @param  {Function} `handleSubmit`
 * @param  {Function} `handleFilter`
 */
export class AppMessage extends React.Component {

    constructor(props) {
      super(props);
      // 2 states. one message is an object. all messages is an array of objects.
      this.state = {
        message: {
          mode: 'public',
          content: '',
          id: null
        },
        allMessages: [],
        filterText: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFilter = this.handleFilter.bind(this);
    }

    // triggers when mode or text field are updated
    handleChange({ target }) {
      const { name, value } = target;
      this.setState((prevState) => ({
        ...prevState,
        message: {
          ...prevState.message,
          [name]: value,
          id: new Date().toUTCString()
        }
      }));
    }

    // triggers when 'Post' button is pressed.
    handleSubmit(event) {
      event.preventDefault();
      this.setState((prevState) => ({
        allMessages: [prevState.message, ...prevState.allMessages],
        message: {
          mode: this.state.message.mode,
          content: '',
          id: null
        }
      }));
    }

    // triggers when search bar completed.
    handleFilter(event) {
      this.setState({
        filterText: event.target.value,
      })
    }

    render() {
      return (
        <div>
          <NewMessage
            message={this.state.message}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <br />
          <MessagesList
            allMessages={this.state.allMessages}
            filterText={this.state.filterText}
            handleFilter={this.handleFilter}
          />
        </div>
      );
    }
  }