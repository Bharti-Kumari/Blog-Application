import { useNavigate } from "react-router-dom";
import "../Styles/Post.css";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

function Post(props) {
  let { postTitle, Author, postList, index, setExtraMessage, date } = props;
  const navigate = useNavigate();
  const handleDelete = async () => {
    console.log("Delete Button Pressed");
    //postList.splice(index, 1);
    //let newPostList = [...postList];
    let extraMessage = `Deleted blog post ${postTitle}`;
    //setPostList(newPostList);
    const blogRef = doc(db, "Blog", postList[index].id);

    await deleteDoc(blogRef);

    setExtraMessage(extraMessage);
    setTimeout(() => {
      setExtraMessage("");
    }, 3000);
  };
  const handleUpdate = () => {
    navigate(`/updatePost/${index}`);
  };
  const handleTitleClick = () => {
    navigate(`/postDetail/${index}`);
  };
  // console.log(author);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are zero-based, so we add 1 to get the correct month number
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Format the date and time as a string
  const formattedDate = `${year}-${month}-${day}`;
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  // Combine date and time
  const viewableDateTime = `${formattedDate} ${formattedTime}`;

  return (
    <div className="post">
      <div className="blog-decription-ctn">
        <h3 onClick={handleTitleClick}>{postTitle}</h3>
        <p>Blog By - {Author}</p>
        <p>Date Added - {viewableDateTime}</p>
      </div>
      <p id="message">Click on the blog title to read the post</p>
      <div className="btn-ctn">
        <button id="update-btn" onClick={handleUpdate}>
          Update
        </button>
        <button id="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Post;
