import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.URL = "https://course-api.com/react-tours-project";
    this.state = {
      loading: true,
      tours: [],
    };
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

  componentDidMount() {
    this.fetchTours();
  }

  render() {
    const { loading, tours } = this.state;

    if (loading) {
      return (
        <main>
          <div className="loading">
            <h1>loading...</h1>
          </div>
        </main>
      );
    }

    if (tours.length === 0) {
      return (
        <main>
          <div className="title">
            <h2>no tours left</h2>
            <button className="btn" onClick={() => {}}>
              refresh
            </button>
          </div>
        </main>
      );
    }

    return <main>DATA</main>;
  }
}

export default App;
