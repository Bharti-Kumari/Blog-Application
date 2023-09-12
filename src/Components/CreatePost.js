import { useNavigate } from "react-router-dom";
import "../Styles/CreatePost.css";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
function CreatePost(props) {
  let { postList, setPostList } = props;
  // console.log(props.setPostList);
  const navigate = useNavigate();
  let postTitleInput = "";
  let postDescriptionInput = "";
  let postAuthor = "";
  const handleTitleInput = (e) => {
    postTitleInput = e.target.value;
  };
  const handleDescriptionInput = (e) => {
    postDescriptionInput = e.target.value;
  };
  const postAuthorInput = (e) => {
    postAuthor = e.target.value;
  };
  const addBlogToCloud = async (title, description, author) => {
    // Add a new document with a generated id.
    const collectionRef = collection(db, "Blog");
    // const refOfNewlyCreatedDoc = await addDoc(collectionRef, {
    //   Title: title,
    //   Author: author,
    //   Description: description,
    //   createdOn: new Date(),
    // });

    // console.log("Document written with ID: ", refOfNewlyCreatedDoc.id);

    const data = {
      Title: title,
      Author: author,
      Description: description,
      createdOn: new Date(),
    };
    //Create new document with auto id in the collection
    const newBlogDoc = doc(collectionRef);
    await setDoc(newBlogDoc, data);

    navigate("/");
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();
    const post = {
      Title: postTitleInput,
      Description: postDescriptionInput,
      Author: postAuthor,
      createdOn: new Date(),
    };
    postList.unshift(post);
    setPostList(props.postList);
    addBlogToCloud(postTitleInput, postDescriptionInput, postAuthor);
  };
  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmitButton} className="form-field">
        <label>Your Name</label>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={postAuthorInput}
          required
        />
        <label>Post title</label>
        <input
          type="text"
          placeholder="Enter the blog title"
          onChange={handleTitleInput}
          required
        />
        <label>Post Description</label>
        <textarea
          id="post-details"
          placeholder="Describe your blog here..."
          onChange={handleDescriptionInput}
          required
        />

        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
