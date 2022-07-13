import "./App.scss";
import ReviewComponent from "./components/ReviewComponent";

function App() {
  return (
    <main>
      <section className="container">
        <h2 className="title">Our Reviews</h2>
        <ReviewComponent />
      </section>
    </main>
  );
}

export default App;
