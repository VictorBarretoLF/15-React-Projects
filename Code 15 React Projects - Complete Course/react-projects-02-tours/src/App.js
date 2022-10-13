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
      <main className="w-fixedWidth mx-auto my-20">
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main className="w-fixedWidth mx-auto my-20">
        <div className="title">
          <h1 className="text-center mb-10 capitalize font-bold">no tours left</h1>
          <button className="mx-auto block bg-clrPrimary5 px-2 py-1 text-xl capitalize text-white rounded tracking-widest" onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="w-fixedWidth mx-auto my-20">
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
