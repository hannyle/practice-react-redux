import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addPost} from '../actions/postActions';

class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: ''
        };
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        // call action
        this.props.addPost(post);
        this.setState({
            title: '',
            body: ''
        })
    }
  render() {
    return (
      <div>
        <h1>Add Post:</h1>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Title: </label><br/>
                <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
            </div>
            <br/>
            <div>
                <label>Body: </label><br/>
                <textarea type="text" name="body" onChange={this.onChange} value={this.state.body}></textarea>
            </div>
            <br/>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired
}



export default connect(null, {addPost})(PostForm);