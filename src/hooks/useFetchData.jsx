import { useEffect, useState } from "react";

function useFetchData() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          "https://67fa0b2b094de2fe6ea2fc96.mockapi.io/cards"
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
