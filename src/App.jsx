import "./App.css";
import { Route, Routes, useParams } from "react-router-dom";

import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import CreateBlogPost from "./components/CreateBlogPost";
import { useState } from "react";

const SingleBlogPost = ({ blogPosts }) => {
  const { blogPostID } = useParams();

  // .find helps you find a specific item in the array
  const specificBlogPost = blogPosts.find(
    (post) => String(post.id) === blogPostID
  );

  // if you cannot find specific blog post, return like "not found"
  if (!specificBlogPost) {
    return <h1>Not found</h1>;
  }

  // we have a blog post ID
  // you have a blogPosts array
  // find the specific blog post with that ID
  return (
    <div>
      <h1>{specificBlogPost.name}</h1>
      <p>{specificBlogPost.body}</p>
    </div>
  );
};

function App() {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      name: "Dummy blog post",
      body: "This is a dummy blog post body that i created just for testing purposes",
    },
    {
      id: 2,
      name: "Dummy blog post 2",
      body: "This is a dummy blog post body that i created just for testing purposes",
    },
  ]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage blogPosts={blogPosts} />} />
        <Route
          path="/:blogPostID"
          element={<SingleBlogPost blogPosts={blogPosts} />}
        />
        <Route
          path="/create"
          element={
            <CreateBlogPost setBlogPosts={setBlogPosts} blogPosts={blogPosts} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
