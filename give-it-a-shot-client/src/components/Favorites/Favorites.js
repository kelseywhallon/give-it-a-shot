import React, { useState, useEffect } from "react";
import UserApi from "../../backend/user";
import styles from "./Favorites.module.scss";

export function Favorites(props) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    console.log(props.currentUser);
    UserApi.favorites(props.currentUser).then(data => {
      console.log(data);
      setFavorites(data);
    });
  }, [props.currentUser]);

  return (
    <div>
      <h2>Your Favorites</h2>
      {favorites.map(favorite => (
        <div key={favorite.id} className={styles.fave}>
          <h4>{favorite.name}</h4>
          <img src={favorite.imageUrl} alt="" />
        </div>
      ))}
    </div>
  );
}
