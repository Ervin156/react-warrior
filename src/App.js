import React from "react";
import "./styles.css";
import MovieItem from "./components/MovieItem";

export default function App() {
  const movie = {
    title: "Avengers infinity war",
    vote_average: 9.4,
    image:
      "https://i2.wp.com/itc.ua/wp-content/uploads/2018/04/Avengers_Infinity_War_i00.jpg?fit=770%2C546&quality=100&strip=all&ssl=1",
    overview:
      "Пока Мстители и их союзники продолжают защищать мир от различных опасностей, с которыми не смог бы справиться один супергерой, новая угроза возникает из космоса: Танос. Межгалактический тиран преследует цель собрать все шесть Камней Бесконечности — артефакты невероятной силы, с помощью которых можно менять реальность по своему желанию. Всё, с чем Мстители сталкивались ранее, вело к этому моменту — судьба Земли никогда ещё не была столь неопределённой."
  };
  return (
    <div className="App">
      <MovieItem movie={movie} />
    </div>
  );
}
