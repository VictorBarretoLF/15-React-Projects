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
    const newTours = this.state.tours.filter((tour) => tour.id !== id)
    this.setState({tours : newTours})
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

    return (
      <main>
        <section>
          <div className="title">
            <h2>our tours</h2>
            <div className="underline"></div>
          </div>
          <div>
            {tours.map(({ id, image, info, name, price }) => {
              return (
                <article key={id} className="single-tour">
                  <img src={image} alt={name} />
                  <footer>
                    <div className="tour-info">
                      <h4>{name}</h4>
                      <h4 className="tour-price">${price}</h4>
                    </div>
                    <p>{info}</p>
                    <button className="delete-btn" onClick={() => this.removeTour(id)}>
                      not interested
                    </button>
                  </footer>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    );
  }
}

export default App;
