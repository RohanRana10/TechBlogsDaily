import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { firestore } from "../firebase";

function Home(props) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        firestore.collection('posts').orderBy('createdAt').get().then((snapshot) => {
            const posts = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });
            console.log(posts);
            setPosts(posts);
        });
    }, []);

    const getPosts = () => {
        firestore.collection('posts').orderBy('createdAt').get().then((snapshot) => {
            console.log('getposts called');
            const posts = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });
            // console.log(posts);
            setPosts(posts);
        });
    }

    function handleDelete(id) {
        console.log('button clicked', id);
        props.showAlert("Blog Removed.");
        firestore.collection('posts').doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
        getPosts();
    }

    return (
        <div className="home">
            <h1 className="display-1" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>TechBlogsDaily</h1>
            <div className="mt-3" style={{ color: props.mode === 'light' ? '#042743' : '#9c9c9c' }}>By Rohan Rana</div>
            {posts.map((post, index) => (
                <>
                    <div className="card w-75 my-3" key={`post-${index}`}>
                        <div className="card-body" style={{backgroundColor: props.mode === 'light' ? 'white' : '#042743', borderRadius: '0.375rem'}}>
                            <Link style={{ textDecoration: 'none' }} to={`/post/${post.id}`}><h5 className="card-title">{post.title}</h5></Link>
                            <p className="card-text" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>{post.subTitle}</p>
                            <button onClick={() => { handleDelete(post.id) }} className={`btn btn-outline-${props.mode === 'light' ? 'danger' : 'light'} delete-btn`}>Delete</button>
                        </div>
                    </div>
                </>
            ))}
        </div>
    );
}

export default Home;



// const styles = {
//     button: {
//         position: 'absolute',
//         right: 10,
//         top: 20
//     },

//     div: {
//         display: 'flex',
//         flexDirection: 'column',
//         position: 'relative'
//     }
// }
