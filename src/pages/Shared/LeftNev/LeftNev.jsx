import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNev = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h3>All Caterogy</h3>
      <div>
        <h4>Nationat news</h4>
        {categories.map((categorie) => (
          <p key={categorie.id}>
            <Link to={`/categorie/${categorie.id}`}>{categorie.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNev;
