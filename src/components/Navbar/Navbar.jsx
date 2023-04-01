import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Input,
} from "@material-ui/core";

import { Autocomplete } from "@material-ui/lab";
import {TextField} from "@material-ui/core";
import { SearchRounded} from "@material-ui/icons";

import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/commerce.png";
import useStyles from "./styles";
import { Label } from "semantic-ui-react";

const PrimarySearchAppBar = ({ totalItems,products,searchedproduct,setsearchedproduct }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const location = useLocation();
  

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = "primary-search-account-menu-mobile";
  

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem> */}
    </Menu>
  );
  

  
  // console.log(products)
  const handlechange=e => {
    // console.log(e.target.value);
    const results=products.filter(product=>{
      if(e.target.value ==="") return products
      return product.name.toLowerCase().includes(e.target.value.toLowerCase())
    });
    setsearchedproduct(results);
    // console.log(results)
  };
  // console.log(searchedproduct)
  


  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="image"
              height="25px"
              className={classes.image}
            />{" "}
            E-Shop
          </Typography>
          <div className={classes.grow} />
          
          {/* <Autocomplete
            id="free-solo-demo"
            freeSolo
            className={classes.grow}
            options={products.map((option) => option.name)}
            renderInput={(params) => <TextField {...params} label="Search Your Product" type="search" />
            }
          /> */}
          <Input className={classes.grow} type="search" onChange={handlechange} placeholder = "Search Your Products... " ></Input>
          {/* <div>
            <form>
               <input type="search" value={searchedproduct} onChange={handlechange}/>
            </form>
          </div> */}
          <SearchRounded/>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default PrimarySearchAppBar;

