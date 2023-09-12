import "../Styles/App.css";
import { useEffect, useState } from "react";
import { Routes as Switch, Route } from "react-router-dom";
import { Navbar, Home, PostDetail, CreatePost, UpdatePost } from "./";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

function App() {
  let [postList, setPostList] = useState([]);
  let [extraMessage, setExtraMessage] = useState("");
  useEffect(() => {
    const loadBlogs = async () => {
      // const querySnapshot = await getDocs(collection(db, "Blog"));
      // let blogLoader = querySnapshot.docs.map((doc) => {
      //   return {
      //     id: doc.id,
      //     ...doc.data(),
      //   };
      // });
      // console.log(blogLoader);
      // blogLoader.sort((a, b) => b.createdOn - a.createdOn);
      // setPostList(blogLoader);
      onSnapshot(collection(db, "Blog"), (querySnapshot) => {
        let blogLoader = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        console.log(blogLoader);
        blogLoader.sort((a, b) => b.createdOn - a.createdOn);
        setPostList(blogLoader);
      });
    };
    loadBlogs();
  }, []);
  return (
    <div className="container">
      <Navbar />

      <h3>{extraMessage}</h3>

      <Switch>
        <Route
          path="/"
          element={
            <Home
              postList={postList}
              setPostList={setPostList}
              setExtraMessage={setExtraMessage}
            />
          }
        />
        <Route
          path="/postDetail/:pos"
          element={<PostDetail postList={postList} setPostList={setPostList} />}
        />
        <Route
          path="/updatePost/:pos"
          element={
            <UpdatePost
              postList={postList}
              setPostList={setPostList}
              setExtraMessage={setExtraMessage}
            />
          }
        />
        <Route
          path="/createPost"
          element={
            <CreatePost
              postList={postList}
              setPostList={setPostList}
              setExtraMessage={setExtraMessage}
            />
          }
        />
      </Switch>
    </div>
  );
}

export default App;
