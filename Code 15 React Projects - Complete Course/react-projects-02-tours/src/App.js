import Tours from "./components/Tours";
import "./App.scss";
import Loading from "./components/Loading";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllTours,
  getToursStatus,
  fetchTours,
} from "./redux/features/toursSlice";

const App = () => {
  const dispatch = useDispatch();
  const tours = useSelector(selectAllTours);
  const toursStatus = useSelector(getToursStatus);

  useEffect(() => {
    if (toursStatus === "idle") {
      dispatch(fetchTours());
    }
  }, []);

  if (toursStatus === "loading") {
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
          <h2>no tours left</h2>
          <button className="title__btn" onClick={() => dispatch(fetchTours())}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
};

export default App;

//
