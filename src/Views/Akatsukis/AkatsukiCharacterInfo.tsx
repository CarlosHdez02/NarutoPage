import React from "react";
import { useParams } from "react-router-dom";
import { FetchNarutoApi } from "../../services/api";
import { akatasukiInterface } from "../../interface/narutoInterface";

export const AkatsukiInfoPage = () => {
  const [akatsuki, setAkatsuki] = React.useState<akatasukiInterface>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<unknown | null>(null);

  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    const fetchAkatsuki = async (id: string) => {
      const api = new FetchNarutoApi();
      try {
        setLoading(true);
        const response = await api.getAkatsukiById(Number(id));
        setAkatsuki(response);
      } catch (err) {
        console.log(err, "err");
        setError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchAkatsuki(id);
  }, [id]);

  if (loading) {
    return "Loading";
  }
  if (error) {
    return "Error";
  }
  return (
    <>
      <div className="personalContainer">
        {akatsuki ? (
          <div className="imageCard" key={akatsuki.id}>
            <img
              className="personalImage"
              src={akatsuki.images}
              alt={akatsuki.name}
            />
            <div className="textContent">
              <h2>{akatsuki.name}</h2>
            </div>
          </div>
        ) : (
          <p>No data found.</p>
        )}
      </div>
    </>
  );
};
