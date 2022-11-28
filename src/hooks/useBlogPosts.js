import { useState, useEffect } from "react";
import client from "../client";

function useBlogPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return [posts];
}

export default useBlogPosts;
