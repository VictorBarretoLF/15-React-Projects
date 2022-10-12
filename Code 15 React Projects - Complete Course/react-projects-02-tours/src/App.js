import Tours from "./components/Tours";
import Loading from "./components/Loading";
import { useState, useEffect } from "react";
import axios from "axios";

const URL = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    setLoading(true);

    try {
      const { data } = await axios.get(URL);
      setLoading(false);
      setTours(data);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2 className="text-4xl font-bold underline">no tours left</h2>
          <button className="title__btn" onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
