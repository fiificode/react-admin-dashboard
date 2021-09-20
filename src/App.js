import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import UserList from "./pages/userList/UserList.jsx"
import "./app.css"
import { Home } from "./pages/home/Home";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";


function App() {
  return (
    <Router className="App">
      <Topbar/>
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />  
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userid">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productid">
            <Product />
          </Route>
          <Route path="/newProduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
