import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Purchases from './Components/Purchases';
import Inventory from './Components/Inventory';
import ShoppingList from './Components/ShoppingList';
import Recipes from './Components/Recipes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/purchases" element={<Purchases />}></Route>
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/shopping-list" element={<ShoppingList />} />
            <Route path="/recipes" element={<Recipes />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
