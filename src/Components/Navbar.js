import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import Logo from "../Assets/Logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

const drawerWidth = 250;
function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const { logout } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const drawer = (
    <Box
      className="Navbar"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <img id="Nav-Logo" src={Logo} alt="Logo" />
      <Divider />

      <List>
        <ul>
          <li>
            <Link id="Nav" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link id="Nav" to="All">
              All projects
            </Link>
          </li>
          <li>
            <Link id="Nav" to="Gallary">
              Gallary
            </Link>
          </li>
          <li>
            <Link id="Nav" to="Sell">
              Land sell
            </Link>
          </li>
          <li>
            <Link id="Nav" to="Rent">
              For Rent
            </Link>
          </li>
          <li>
            <Link id="Nav" to="forSell">
              For Sell
            </Link>
          </li>
          <li>
            <Link id="Nav" to="Carrier">
              Carrier opportunity
            </Link>
          </li>
          <li>
            <Link id="Nav" to="Contact">
              Contact
            </Link>
          </li>
          <li>
            <Link id="Nav" to="About">
              About us
            </Link>
          </li>
          <li>
            {isAuthenticated ? (
              <li>
                <Button
                  id="Nav"
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  Log Out
                </Button>
              </li>
            ) : (
              <li>
                <Button id="Nav" onClick={() => loginWithRedirect()}>
                  Log In
                </Button>
              </li>
            )}
          </li>
        </ul>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className="Navbar" sx={{ display: "flex" }}>
      <AppBar className="Navbar" component="nav">
        <Toolbar className="Navbar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { sm: "none" } }}
          >
            <MenuIcon id="Menu" />
          </IconButton>

          {/*Topbar start from here*/}
          <img id="Logo" src={Logo} alt="Logo" />
          <Box className="Navbar" sx={{ display: { xs: "none", sm: "block" } }}>
            <ul>
              <li>
                <Link id="Nav" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link id="Nav" to="All">
                  All projects
                </Link>
              </li>
              <li>
                <Link id="Nav" to="Gallary">
                  Gallary
                </Link>
              </li>
              <li>
                <Link id="Nav" to="Sell">
                  Land sell
                </Link>
              </li>
              <li>
                <Link id="Nav" to="Rent">
                  For Rent
                </Link>
              </li>
              <li>
                <Link id="Nav" to="forSell">
                  For Sell
                </Link>
              </li>
              <li>
                <Link id="Nav" to="Carrier">
                  Carrier opportunity
                </Link>
              </li>
              <li>
                <Link id="Nav" to="Contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link id="Nav" to="About">
                  About us
                </Link>
              </li>

              {isAuthenticated ? (
                <li>
                  <Link
                    id="Nav"
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Log Out
                  </Link>
                </li>
              ) : (
                <li>
                  <Link id="Nav" onClick={() => loginWithRedirect()}>
                    Log In
                  </Link>
                </li>
              )}

             { /*{isAuthenticated && (
                <div>
                  <img src={user.picture} alt={user.name} />
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
              )}*/}
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navigation.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navigation;
