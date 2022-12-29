import React, { useEffect, useState } from 'react'
import { firestore } from '../firebase';
import { useParams } from 'react-router-dom';


export default function PostDetail(props) {
    const [post, setPost] = useState({});
    const { postId }  = useParams();
    useEffect(() => {
        firestore.collection('posts').doc(postId).get().then((snapshot) => {
            console.log('snapshot', snapshot);
            setPost(snapshot.data());
        })
    },[postId]);

    return (
        <div className='post-detail'>
            <h1 className='display-3' style={{color: props.mode === 'light' ? '#042743' : '#878787'}}>{post.title}</h1>
            <p className='w-50 my-4' style={{color: props.mode === 'light' ? '#042743' : 'white'}}>{post.content}</p>
        </div>
    )
}
