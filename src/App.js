import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ProductsPage from "./ProductsPage/ProductsPage";
import DetailsPage from "./DetailsPage/DetailsPage";
import CheckoutPage from "./CheckoutPage/CheckoutPage";
import CartPage from "./CartPage/CartPage";

function App() {
  return (
    <Router>
      <Route path='/products' exact component={ProductsPage} />
      <Route path='/products/:id' exact component={DetailsPage} />
      <Route path='/cart' component={CartPage} />
      <Route path='/checkout' component={CheckoutPage} />
    </Router>

  );
}

export default App;
