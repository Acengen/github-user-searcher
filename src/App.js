import React, { Component } from "react";
import axios from "axios";
import "./css/main.css";

import Header from "./components/Header";
import Form from "./components/Form";
import User from "./components/User";
import AlertDelete from "./components/Alert";
import AlertSubmit from "./components/AlertSubmit";

class App extends Component {
  state = { users: [], alert: null };

  componentDidMount() {
    this.searchForUser("acengen");
  }

  searchForUser = async (text) => {
    const respon = await axios.get(`https://api.github.com/users/${text}`);

    this.setState({ users: respon.data });
  };

  //Close i tag fa fa-trash
  deleteButton = () => this.setState({ users: "" });

  //Alert message for delete button
  alertMessage = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });

    setTimeout(() => {
      return this.setState({
        alert: null,
      });
    }, 3000);
  };

  render() {
    const { users, alert } = this.state;
    return (
      <div className="container-fluid">
        <Header />
        <div className="container">
          {alert !== null && <AlertSubmit alert={alert} />}
          <Form
            searchForUser={this.searchForUser}
            alertMessage={this.alertMessage}
          />
          {users === "" && <AlertDelete />}
          <User
            users={users}
            showContet={users.length >= 0 ? true : false}
            deleteButton={this.deleteButton}
          />
        </div>
      </div>
    );
  }
}

export default App;
