import { useEffect, useState, useContext } from "react";

function useFetchData() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const data = useContext(DataContext);
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          "https://6800a325b72e9cfaf7281bec.mockapi.io/Turbo_Az/cards"
        );
        const data = await response.json();
        setCards(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  return { cards, loading, error };
}

export default useFetchData;
