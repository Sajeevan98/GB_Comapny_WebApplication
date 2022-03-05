import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Switch } from "react-router-dom";
import Header from './Component/Header';
import Footer from './Component/Footer';
import ProductList from './Component/ProductList';
import AddProduct from './Component/AddProduct';
import UpdateProduct from './Component/UpdateProduct';


function App() {
  return (
    <div> 
      <Router>
          <Header />
          <div style={{background: '#dff2f1'}}>
            <Switch>
              <Route path="/"  exact component={ProductList}></Route>
              <Route path="/product" component={ProductList}></Route>
              <Route path="/product-add" component={AddProduct}></Route>
              <Route path="/product-update/:id" component={UpdateProduct}></Route>
              <Route path="/product-delete/:id" component={ProductList}></Route>
            </Switch>
          </div>
          <Footer />
      </Router>
    </div>
  );
}

export default App;

