import "./App.scss";
import List from "./components/List";
import { useSelector, useDispatch } from "react-redux";
import { clearList } from "./features/list/listSlice";

const App = () => {
  const list = useSelector((state) => state.birthdayList.list);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(clearList());
  };

  return (
    <main>
      <section className="container">
        <h3>{list.length} birthdays today</h3>
        <List people={list} />
        <button onClick={onClickHandler} className="container__btn">
          clear all
        </button>
      </section>
    </main>
  );
};

export default App;
