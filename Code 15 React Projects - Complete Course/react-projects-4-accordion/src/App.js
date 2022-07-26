import React, { Component } from "react";
import Question from "./components/Question";
import questions from "./utils/data";

// {
//   id: 3,
//   title: "What is BankID?",
//   info: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
// },

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: questions,
    };
  }

  render() {
    const { questions } = this.state;

    return (
      <main>
        <div className="container">
          <h3>questions and answers about login</h3>
          <section className="info">
            {questions.map((question) => {
              return <Question key={question.id} {...question} />;
            })}
          </section>
        </div>
      </main>
    );
  }
}

export default App;
