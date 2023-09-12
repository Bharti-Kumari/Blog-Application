import { useParams } from "react-router-dom";

function PostDetail(props) {
  let { postList } = props;

  let { pos } = useParams();
  if (postList[pos] === undefined) {
    return <h1>No Such Post Exist</h1>;
  }
  let { Title, Description, Author } = postList[pos];

  return (
    <div className="post-detail">
      <h1>{Title}</h1>
      <p id="blog-by">By-{Author}</p>
      <textarea defaultValue={Description} readOnly></textarea>
    </div>
  );
}

export default PostDetail;
