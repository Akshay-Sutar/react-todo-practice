import "./App.css";
import { Provider } from "react-redux";
import TodoList from "./components/Todos.js";
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
    
  );
}

export default App;
