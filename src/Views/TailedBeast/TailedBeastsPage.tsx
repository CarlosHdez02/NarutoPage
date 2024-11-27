import React from "react";
import { tailedBeastInterface } from "../../interface/narutoInterface";
import { FetchNarutoApi } from "../../services/api";
import "../../App.css";
import { Link } from "react-router-dom";

export const TailedBeasts = () => {
  const [tailedBeasts, setTailedBeasts] = React.useState<
    tailedBeastInterface[]
  >([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<unknown | null>(null);

  React.useEffect(() => {
    const api = new FetchNarutoApi();
    const fetchTailedBeasts = async () => {
      try {
        setLoading(true);
        const data = await api.getTailedBeasts();
        setTailedBeasts(data.tailedBeasts);
      } catch (err) {
        console.log(err, "err");
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTailedBeasts();
  }, []);

  if (loading) {
    return "loading...";
  }
  if (error) {
    return "Error!";
  }

  return (
    <>
      <div className="container">
        {tailedBeasts.map((beast) => (
          <ul key={beast.id}>
            <div className="card">
              <Link to={`/beasts/${beast.id}`}>
                <img className="images" src={beast.images} alt={beast.name} />
              </Link>
              <h2>{beast.name}</h2>
            </div>
          </ul>
        ))}
      </div>
    </>
  );
};
