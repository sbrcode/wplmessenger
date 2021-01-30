import React from 'react';
import MessagesList from "../Presentational/MessagesList";
import NewMessage from "../Presentational/NewMessage";

/**
 * React Class. description of the object message and different methods.
 */
export class AppMessage extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        message: {
          mode: 'public',
          content: '',
          id: ''
        },
        allMessages: []
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

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

    handleSubmit(event) {
      event.preventDefault();
      this.setState((prevState) => ({
        allMessages: [prevState.message, ...prevState.allMessages],
        message: {
          mode: this.state.message.mode,
          content: ''
        }
      }));
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
          />
        </div>
      );
    }
  }