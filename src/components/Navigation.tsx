import { Link } from "react-router-dom";
import "../App.css";

export const Navigation = () => {
  return (
    <>
      <div className="navContainer">
        <nav className="navigation">
          <Link className="links" to={`/`}>Home</Link>
          <Link className="links" to={`/characters`}>Characters</Link>
          <Link className="links" to={`/beasts`}>Tailed Beasts</Link>
          <Link className="links" to={`/akatsuki`}>Akatsukis</Link>
        </nav>
      </div>
    </>
  );
};
