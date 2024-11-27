import React from "react";
import { akatasukiInterface } from "../../interface/narutoInterface";
import { FetchNarutoApi } from "../../services/api";
import '../../App.css'
import { Link } from "react-router-dom";

export const Akatsuki = () => {
  const [akatsukis, setAkatsukis] = React.useState<akatasukiInterface[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<unknown | undefined>();

  React.useEffect(() => {
    const fechAkatsukis = async () => {
      const api = new FetchNarutoApi();

      try {
        setLoading(true);
        const data = await api.getAkatsukiCharacters();
        setAkatsukis(data.akatsuki);
      } catch (err) {
        console.log(err, "err");
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fechAkatsukis();
  }, []);

  if (loading) {
    return "Loading...";
  }
  if (error) {
    return "Error!";
  }
  return (
    <>
      <div className="container">
        {akatsukis.map((akatsuki) => (
          <ul key={akatsuki.id}>
            <div className="card">

              <Link to={`/akatsuki/${akatsuki.id}`}>
              <img
                className="images"
                src={akatsuki.images}
                alt={akatsuki.name}
              />
              </Link>
              <h2> {akatsuki.name}</h2>
            </div>
          </ul>
        ))}
      </div>
    </>
  );
};
