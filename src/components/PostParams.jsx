import { useParams } from "react-router-dom";

function PostParams() {
  const params = useParams();

  return (
    <div>
      {/* Show the parameters from the url */}
      {/* This show the first slash in the url */}
      <h1>Post {params.id}</h1>
      {/* This show the seconed slash in the url */}
      <h1>Name: {params.name}</h1>
    </div>
  );
}

export default PostParams;
