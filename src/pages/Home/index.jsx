import React from "react";
import useFetchData from "../../hooks/useFetchData";
import Card from "../../components/card";
import "./home.css";
import ErrorPage from "../ErrorPage";
import LoadingScreen from "../Loading";

function Home() {
  const { cards, loading, error } = useFetchData();

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorPage message={error} />;

  return (
    <div className="home">
      <h1>Premium Elanlar</h1>
      <div className="home-cards">
        {cards.map((car) => (
          <Card key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default Home;
