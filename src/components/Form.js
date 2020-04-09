import React, { Component } from "react";

class Form extends Component {
  state = {
    text: "",
  };

  onChange = (e) => {
    this.setState({
      text: e.target.value.trim(),
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.alertMessage("Put Something in input field", "warning");
    } else {
      this.props.alertMessage("Succesfully added a user", "success");
      this.props.searchForUser(this.state.text);
      this.setState({
        text: "",
      });
    }
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.onChange}
            placeholder="exp: Jhon Doe"
          />
          <input type="submit" className="btn btn-dark my-2" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
