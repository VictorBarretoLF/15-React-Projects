import React, { Component } from "react";
import List from "./components/List";
import Alert from "./components/Alert";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      list: [],
      isEditing: false,
      editID: null,
      alert: { show: false, msg: "", type: "" },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, isEditing, list } = this.state;
    if (!name) {
      // display alert
    } else if (name && isEditing) {
      // deal with edit
    } else {
      // show alert
      const newItem = { id: new Date().getTime().toString(), title: name };
      this.setState({ list: [...list, newItem] }, () => {
        console.log(this.state);
      });
      this.setState({ name: "" });
    }
  };

  render() {
    const { alert, isEditing, name, list } = this.state;
    return (
      <section className="section-center">
        <form className="grocery-form" onSubmit={this.handleSubmit}>
          {alert.show && <Alert />}
          <h3>grocery bud</h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="e.g. eggs"
              value={name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? "edit" : "submit"}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="grocery-container">
            <List items={list} />
            <button className="clear-btn">clear it</button>
          </div>
        )}
      </section>
    );
  }
}

export default App;
