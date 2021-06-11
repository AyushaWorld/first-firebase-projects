import React, { Component, Fragment } from 'react';
import {auth} from '../Utility/Configration';
export default class Authantication extends Component {

    state={
        email:"",
        password:"",
        massage:""
    }

    OnChangeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
        console.log(e.target.name);
    }

    OnSignInHandler=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user))
            this.setState({massage:""})
        })
        .catch(err=> this.setState({massage:err.code}));
    }

    OnSignUpHandler = (e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(user =>{
            console.log(user)
            this.setState({massage:"User Successfully SignUp"})
            })
        .catch(err=> this.setState({massage:err.code}));
    }

    render() {
        return (
           <Fragment>
           {this.state.massage?(
           <p className="alert alert-danger container mt-3">{this.state.massage}</p>
           ):''}
            <form onSubmit={this.OnSignInHandler} className="container mt-3 mb-3 jumbotron">
            <h3>Firebase signIn Form</h3>
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input 
                    name="email"
                    onChange={this.OnChangeHandler}
                    type="email"
                    className="form-control"
                    
                    />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input 
                    type="password" 
                    name="password"
                    onChange={this.OnChangeHandler}
                    className="form-control"
                     />
                
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <form onSubmit={this.OnSignUpHandler} className="container mt-3 mb-3 jumbotron">
            <h3>Firebase signUp Form</h3>
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input 
                    type="email" 
                    name="email"
                    onChange={this.OnChangeHandler}
                    className="form-control"
                    />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input 
                    type="password"
                    name="password"
                    onChange={this.OnChangeHandler} 
                    className="form-control" 

                    />
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </Fragment>
        )
    }
}
