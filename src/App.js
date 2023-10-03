import logo from './logo.svg';
import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<ProductListing/>}/>
        <Route exact path="/product/:productId" element={<ProductDetails/>}/>
        <Route >404 Not Found!</Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
