import React, { useState, useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar, Products} from "./components";
import { commerce } from "./lib/commerce";

const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [searchedproduct,setsearchedproduct]=useState([]);
 

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    
    setProducts(data);
  };
  
  
  
  
  useEffect(() => {
    fetchProducts();
    
  }, []);
 
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
   
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <CssBaseline />
        <Navbar handleDrawerToggle={handleDrawerToggle} products={products} searchedproduct={searchedproduct} setsearchedproduct={setsearchedproduct}/>
        <Switch>
          <Route exact path="/">
            <Products products={products} searchedproduct={searchedproduct}  />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
