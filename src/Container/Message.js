import React from 'react';

export class Message extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mode: 'public',
        message: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
    handleSubmit(event) {
      alert(this.state.mode +', '+ this.state.message);
      event.preventDefault();
      this.setState({
        mode: this.state.mode,
        message: ''
      })
    }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Mode
            <select name="mode" value={this.state.mode} onChange={this.handleChange}>
              <option value="public">public</option>
              <option value="private">private</option>
            </select>
          </label>
          <br />
          <label>
            Message
            <input name="message" type="text" value={this.state.message} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Post" />
        </form>
      );
    }
  }