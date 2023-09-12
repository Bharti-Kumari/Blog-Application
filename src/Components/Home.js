import Post from "./Post";
import "../Styles/Home_.css";
function Home(props) {
  let { postList, setPostList, setExtraMessage } = props;

  if (postList.length === 0) {
    return (
      <div className="home">
        <h1>Blog Web App</h1>
        <h1>Click on the Create Post to Create Blogs</h1>
      </div>
    );
  }
  return (
    <div className="home">
      <h1>Blog Web App</h1>
      {postList.map((post, index) => {
        return (
          <Post
            postTitle={post.Title}
            Author={post.Author}
            setPostList={setPostList}
            postList={postList}
            index={index}
            key={index}
            setExtraMessage={setExtraMessage}
            date={post.createdOn.toDate()}
          />
        );
      })}
    </div>
  );
}

export default Home;
