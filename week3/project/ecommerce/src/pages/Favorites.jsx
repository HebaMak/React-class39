import { useContext, useEffect, useState } from "react";
import { provideContext } from "../hooks/context";
import Product from "../components/Product";

const Favorites = () => {
  const { favorites, URL } = useContext(provideContext);

  const [favProducts, setFavProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const promises = favorites.map((id) => {
      return fetch(`${URL}/${id}`);
    });
    Promise.all(promises)
      .then((responses) => {
        return Promise.all(responses.map((res) => res.json()));
      })
      .then((data) => {
        setFavProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });

    console.log("products", favProducts);
  }, [favorites]);

  return (
    <div className="favorites_page">
      <h1>You haven't chosen any favorites yet!</h1>
      {favProducts.map((product) => {
        return <Product product={product} />;
      })}
    </div>
  );
};

export default Favorites;
