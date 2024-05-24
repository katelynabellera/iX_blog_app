import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/HomePage";
import BlogsPage from "./Components/BlogsPage";
/* import "bootstrap/dist/js/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/dotn/bootstrap-icons.css"; */



function App() {
  return (
    <div className="App">
      <HomePage />
      <BlogsPage />
    </div>
  );
}

export default App;
