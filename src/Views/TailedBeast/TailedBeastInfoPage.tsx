import React from "react";
import { FetchNarutoApi } from "../../services/api";
import { tailedBeastInterface } from "../../interface/narutoInterface";
import { useParams } from "react-router-dom";
import "../../App.css";

export const TailedBeastInfoPage = () => {
  const [tailedBeast, setTailedBeast] =
    React.useState<tailedBeastInterface | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<unknown | null>(null);

  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    const api = new FetchNarutoApi();
    const fetchTailedBeast = async (id: string) => {
      setLoading(true);
      try {
        const response = await api.getTailedBeastById(Number(id));
        console.log(response, "response");
        setTailedBeast(response); // Set the single tailed beast object
      } catch (err) {
        setError(err);
        console.log(err, "err");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchTailedBeast(id);
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching tailed beast.</p>;

  return (
    <>
      <div className="personalContainer">
        {tailedBeast ? (
          <div className="imageCard" key={tailedBeast.id}>
            <img
              className="personalImage"
              src={tailedBeast.images}
              alt={tailedBeast.name}
            />
            <div className="textContent">
              <h2>{tailedBeast.name}</h2>
            </div>
          </div>
        ) : (
          <p>No data found.</p>
        )}
      </div>
    </>
  );
};
