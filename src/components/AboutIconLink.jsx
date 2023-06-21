import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutIconLink() {
  return (
    <div className="about-link">
      <Link to="/about">
      {/* optzional:
       <Link to={{
        pathname: '/about',
        search: '?section=about',
        hash: '#about',
      }}></Link> */}
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutIconLink;
