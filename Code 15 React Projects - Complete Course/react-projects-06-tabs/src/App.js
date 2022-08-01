import "./App.css";

import React, { Component } from "react";

class App extends Component {
  URL = "https://course-api.com/react-tabs-project";

  constructor() {
    super();
    this.state = {
      loading: true,
      jobs: [],
      value: 0,
    };
  }

  fetchJobs = async () => {
    const response = await fetch(this.URL);
    const newJobs = await response.json();

    this.setState({ loading: false, jobs: newJobs });
  };

  componentDidMount = () => {
    this.fetchJobs();
  };

  render() {
    const { loading, jobs, value } = this.state;

    if (loading)
      return (
        <section className="section loading">
          <h1>loading...</h1>
        </section>
      );

    const { company, dates, duties, title } = jobs[value];
    return (
      <section className="section">
        <div className="title">
          <h2>expierence</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          {/* btn container*/}
          </div>
          {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
        </article>
      </section>
    );
  }
}

export default App;
