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
      this.showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      // deal with edit
    } else {
      // show alert
      this.showAlert(true, "success", "item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };
      this.setState({ list: [...list, newItem] }, () => {
        console.log(this.state);
      });
      this.setState({ name: "" });
    }
  };

  showAlert = (show = false, type = "", msg = "") => {
    this.setState({
      alert: { show, msg, type },
    });

    const fnc = setTimeout(() => {
      this.setState({ alert: { show: false, msg: "", type: "" } });
    }, 5000);
    return () => clearTimeout(fnc);
  };

  clearList = () => {
    this.showAlert(true, "danger", "empty list");
    this.setState({ list: [] });
  };

  render() {
    const { alert, isEditing, name, list } = this.state;
    const { clearList } = this;
    return (
      <section className="section-center">
        <form className="grocery-form" onSubmit={this.handleSubmit}>
          {alert.show && <Alert {...alert} />}
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
            <button className="clear-btn" onClick={clearList}>
              clear it
            </button>
          </div>
        )}
      </section>
    );
  }
}

export default App;
