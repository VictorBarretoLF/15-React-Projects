import { Component } from "react";
import Tours from "./components/Tours";
import "./App.scss";
import Loading from "./components/Loading";

class App extends Component {
  constructor() {
    super();
    this.URL = "https://course-api.com/react-tours-project";
    this.fetchTours = this.fetchTours.bind(this);
    this.state = {
      loading: true,
      tours: [],
    };
  }

  componentDidMount() {
    this.fetchTours();
  }

  fetchTours = async () => {
    this.setState({ loading: true });

    try {
      const response = await fetch(this.URL);
      const data = await response.json();
      this.setState({ loading: false });
      this.setState({ tours: data });
    } catch (err) {
      this.setState({ loading: false });
      console.log(err);
    }
  };

  removeTour = (id) => {
    const newTours = this.state.tours.filter((tour) => tour.id !== id);
    this.setState({ tours: newTours });
  };

  render() {
    const { loading, tours } = this.state;

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
            <h2>no tours left</h2>
            <button className="title__btn" onClick={this.fetchTours}>
              refresh
            </button>
          </div>
        </main>
      );
    }

    return (
      <main>
        <Tours tours={tours} removeTour={this.removeTour} />
      </main>
    );
  }
}

export default App;
