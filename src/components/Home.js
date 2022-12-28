import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { firestore } from "../firebase";

function Home() {
    const [posts,setPosts] = useState([]);
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
    },[]);

    function getPosts(){
        firestore.collection('posts').orderBy('createdAt').get().then((snapshot) => {
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
        console.log('button clicked',id);
        firestore.collection('posts').doc(id).delete().then(()=>{
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
        getPosts();
    }

    return (
    <div className="home">
        <h1>Tech Blog</h1>
        <div id="blog-by">Rohan Rana</div>
        {posts.map((post, index) => (
            <div className="post" style={styles.div} key={`post-${index}`}>
                <Link to={`/post/${post.id}`}>
                    <h3>{post.title}</h3>
                </Link>
                <p>{post.subTitle}</p>
                <div>
                <button style={styles.button} onClick={() => {handleDelete(post.id)}}>X</button>
                </div>
            </div>
        ))}
    </div>
    );
}

export default Home;



const styles = {
    button: {
        position: 'absolute',
        right: 10,
        top: 20
    },

    div: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
    }
}
