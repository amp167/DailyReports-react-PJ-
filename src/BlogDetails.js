import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="blog-details">
      {isPending && <div>Loading.....</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <div style={{ textAlign: "right" }}>
            <p>Date : {blog.dateString}</p>
            <p>
              Report By :{" "}
              <span
                style={{
                  color: "greenyellow",
                  fontWeight: "bolder",
                }}
              >
                {blog.author}
              </span>
            </p>
          </div>
          <h1
            style={{
              borderBottom: "1px solid gray",
              marginBottom: "10px",
              display: "inline-block",
            }}
          >
            {blog.title}
          </h1>
          <div style={{ fontWeight: "bold" }}>{blog.body}</div>

          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
