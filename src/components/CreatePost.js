import { firestore } from '../firebase';
import { useFormInput } from '../hooks';
import { Link } from 'react-router-dom';
// import { useState } from 'react';

function CreatePost(props) {
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

    const handleSubmitAlert = () => {
        props.showAlert('Blog Published.');
    }
    return (
        <>
            <div style={{ color : props.mode === 'light' ? '#042743' : 'white', marginTop: 20, marginLeft: 50, marginRight: 50 }}>
                <form onSubmit={handleSubmit}>
                    <div className="form-text" style={{color : props.mode === 'light' ? '#042743' : 'white', marginTop: 20, marginBottom: 10 }}> <strong>Note:</strong> All categories specified below are <strong>Required</strong>.</div>
                    <div className="mb-3 mt-4">
                        <label htmlFor="title" className="form-label fw-semibold">Title:</label>
                        <input type="text" style={{backgroundColor : props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? '#042743' : 'white'}} className="form-control" id="title" value={title.value} onChange={title.onchange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="sub-title" className="form-label fw-semibold">Subtitle:</label>
                        <input type="text" style={{backgroundColor : props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? '#042743' : 'white'}} className="form-control" id="sub-title" value={subTitle.value} onChange={subTitle.onchange} required />
                    </div>
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Write Here..." id="content" style={{ backgroundColor : props.mode === 'light' ? 'white' : '#042743', height: 400, color: props.mode === 'light' ? '#042743' : 'white'}} value={content.value} onChange={content.onchange} required></textarea>
                        <label htmlFor="content" className='fw-semibold'>Content</label>
                    </div>
                    <button type="submit" onClick={handleSubmitAlert} className="btn btn-outline-success">Submit</button>
                    <Link to='/'><button style={{ marginLeft: 20 }} className="btn btn-outline-info my-3">Back</button></Link>
                </form>
            </div>
        </>
    );
}

export default CreatePost;