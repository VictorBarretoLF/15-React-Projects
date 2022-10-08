import Tours from "./components/Tours";
import "./App.scss";
import Loading from "./components/Loading";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllTours } from "./redux/features/toursSlice";

const URL = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const tours = useSelector(selectAllTours);
  console.log(tours)
  // useEffect(() => {
  //   fetchTours();
  // }, []);

  // const fetchTours = async () => {
  //   setLoading(true);

  //   try {
  //     const response = await fetch(URL);
  //     const data = await response.json();
  //     console.log(data);
  //     setLoading(false);
  //     setTours(data);
  //   } catch (err) {
  //     setLoading(false);
  //     console.log(err);
  //   }
  // };

  // const removeTour = (id) => {
  //   const newTours = tours.filter((tour) => tour.id !== id);
  //   setTours(newTours);
  // };

  // if (loading) {
  //   return (
  //     <main>
  //       <Loading />
  //     </main>
  //   );
  // }

  // if (tours.length === 0) {
  //   return (
  //     <main>
  //       <div className="title">
  //         <h2>no tours left</h2>
  //         <button className="title__btn" onClick={fetchTours}>
  //           refresh
  //         </button>
  //       </div>
  //     </main>
  //   );
  // }

  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
};

export default App;
