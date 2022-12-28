import { firestore } from '../firebase';
import { useFormInput } from '../hooks';
import { Link } from 'react-router-dom';

function CreatePost() {
    const title = useFormInput('');
    const content = useFormInput('');
    const subTitle = useFormInput('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(title, "title");
        console.log(subTitle, "subTitle");
        console.log(content, "content");

        firestore.collection('posts').add({
            title: title.value,
            content: content.value,
            subTitle: subTitle.value,
            createdAt: new Date()
        });
    }
    return (
        <div className="create-post">
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="">Title</label>
                    <input value={title.value} onChange={title.onchange} required/>
                </div>

                <div className="form-field">
                    <label htmlFor="">Sub Title</label>
                    <input value={subTitle.value} onChange={subTitle.onchange} required />
                </div>

                <div className="form-field">
                    <label htmlFor="">Content</label>
                    <textarea value={content.value} onChange={content.onchange} required></textarea>
                </div>

                <button className="create-post-btn">Create Post</button>
                <Link to='/'><button style={{marginLeft: 10}} className="create-post-btn">Back</button></Link>

            </form>
        </div>
    );
}

export default CreatePost;