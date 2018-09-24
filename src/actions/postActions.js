import {FETCH_POSTS, ADD_POST} from './types';

//dispatch and fetch posts to the reducer
export const fetchPosts = () => dispatch => {  //dispatch to send data   
    fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(resData => dispatch({
            type: FETCH_POSTS,
            payload: resData //data comming in to the reducer is called payload
    }));   
}

export const addPost = (postData) => dispatch => {  //dispatch to send data   
    
    fetch('http://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(resData =>  dispatch({
            type: ADD_POST,
            payload: resData
        }))
}