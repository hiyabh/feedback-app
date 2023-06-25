import { Navigate, useNavigate, Routes, Route } from "react-router-dom";

function Post() {
  const status = 200;
  const navigate = useNavigate();

  // Navigates you to the appropriate page by status
  if (status === 404) {
    return <Navigate to="/notfound" />;
  }

  // Navigates you to the appropriate page by Click
  const onClick = () => {
    // Add some actions before navigate if you want...
    console.log("clicked");
    navigate("/about");
  };
  return (
    <div>
      <h1>Post</h1>
      <button onClick={onClick}>Go to About</button>
      
      {/* Shows it only if there is /show in the URL */}
      <Routes>
        <Route path="/show" element={<h1>Hello World</h1>} />
      </Routes>
    </div>
  );
}

export default Post;
