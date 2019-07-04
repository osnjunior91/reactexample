import React, { Component } from "react";
import firebase from "../firebaseConnection";
import "../Login/index.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      id: ""
    };
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    firebase.auth().signOut()
      .then(() => {
        this.setState({
          email: "",
          id: ""
        });
        this.props.history.push("/login");
      });
  }

  componentDidMount() {
    this.setState({
      email: firebase.auth().currentUser.email,
      id: firebase.auth().currentUser.uid
    });
  }
  render() {
    return (
      <div className="login">
        <div className="jumbotron">
          <h1>Bem vindo! {this.state.email}</h1>
          <p>Seu id é: {this.state.id}</p>
          <p>
            <a href="/#" className="btn btn-primary btn-lg" onClick={this.logout} role="button">
              Sair do Sistema!
            </a>
          </p>
        </div>
      </div>
    );
  }
}
