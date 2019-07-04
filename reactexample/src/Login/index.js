import React, { Component } from 'react';
import firebase from '../firebaseConnection';
import './index.css';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: ''
        };
        this.cadastrarUsuario = this.cadastrarUsuario.bind(this);
        this.loginUsuario = this.loginUsuario.bind(this);
        this.changeInput = this.changeInput.bind(this);
    }

    loginUsuario(e) {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
            .then((user) => {
                alert(`Bem-vindo ${user.user.email}!`);
                this.props.history.push("/");
            })
            .catch((error) => {
                alert(`Erro:  ${error}.`);
            });

    }

    cadastrarUsuario(e) {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
            .then((user) => {
                alert(`Usuário ${user.user.uid} criado com sucesso.`);
            })
            .catch((error) => {
                alert(`Erro:  ${error}.`);
            });
        e.preventDefault();
    }

    changeInput(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="login">
                <div className="jumbotron">
                    <h1>
                        Login
                        </h1>
                    <div className="form-group">
                        <label htmlFor="usr">Email:</label>
                        <input type="text" className="form-control" id="usr" name="email" value={this.state.email}
                            onChange={this.changeInput} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Senha:</label>
                        <input type="password" className="form-control" id="pwd" name="senha" value={this.state.senha}
                            onChange={this.changeInput} />
                    </div>
                    <br />
                    <button type="button" onClick={this.loginUsuario} className="btn btn-primary btn-lg btn-block">Login</button>
                    <br />
                    <button type="button" onClick={this.cadastrarUsuario} className="btn btn-secondary btn-lg btn-block">Cadastrar usuário</button>
                </div>
            </div>
        );
    }
}