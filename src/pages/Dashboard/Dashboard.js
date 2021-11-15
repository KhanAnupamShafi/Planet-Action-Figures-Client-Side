import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import {
  Chip,
  createTheme,
  Grid,
  ListItemButton,
  Paper,
  ThemeProvider,
  Tooltip,
} from "@mui/material";
import {
  Add,
  AdminPanelSettings,
  ArrowRight,
  DashboardCustomizeRounded,
  DeleteForever,
  FeedbackSharp,
  Home,
  LibraryBooksOutlined,
  Money,
  ProductionQuantityLimitsTwoTone,
  Settings,
} from "@mui/icons-material";

import useAuth from "../../hooks/useAuth";
import Orders from "./Orders/Orders";
import Review from "./Review/Review";
import Pay from "./Pay/Pay";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import AllOrders from "./AllOrders/AllOrders";
import AddProduct from "./AddProduct/AddProduct";
import AdminRoute from "../SignUp/AdminRoute/AdminRoute";
import ManageProduct from "./ManageProduct/ManageProduct";

const drawerWidth = 240;

function Dashboard(props) {
  const { user, admin, logOut } = useAuth();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  console.log(useRouteMatch());
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: "dark",
            primary: { main: "rgb(102, 157, 246)" },
            background: { paper: "rgb(5, 30, 52)" },
          },
        })}
      >
        <Paper elevation={0} sx={{ height: "100vh" }}>
          <Toolbar>
            <ListItemButton component="a" href="#dashboard-list">
              <ListItemIcon sx={{ fontSize: 20, color: "error" }}>
                <DashboardCustomizeRounded color="info" />
              </ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="Dashboard"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "medium",
                  letterSpacing: 0,
                }}
              />
            </ListItemButton>
          </Toolbar>
          <Divider />
          {/* /* ----------------------- component={Link} to="/home" ----------------------  */}
          <ListItem button disablePadding component={Link} to="/">
            <ListItemButton sx={{ height: 56 }}>
              <ListItemIcon>
                <Home color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Go Home"
                primaryTypographyProps={{
                  color: "primary",
                  fontWeight: "medium",
                  variant: "body2",
                }}
              />
            </ListItemButton>
            <Tooltip title="Settings">
              <IconButton
                size="large"
                sx={{
                  "& svg": {
                    color: "rgba(255,255,255,0.8)",
                    transition: "0.2s",
                    transform: "translateX(0) rotate(0)",
                  },
                  "&:hover, &:focus": {
                    bgcolor: "unset",
                    "& svg:first-of-type": {
                      transform: "translateX(-4px) rotate(-20deg)",
                    },
                    "& svg:last-of-type": {
                      right: 0,
                      opacity: 1,
                    },
                  },
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    height: "80%",
                    display: "block",
                    left: 0,
                    width: "1px",
                    bgcolor: "divider",
                  },
                }}
              >
                <Settings />
                <ArrowRight
                  sx={{ position: "absolute", right: 4, opacity: 0 }}
                />
              </IconButton>
            </Tooltip>
          </ListItem>
          <Divider />
          <Box
            sx={{
              bgcolor: "rgba(71, 98, 130, 0.2)",
              p: 1,
              pb: 2,
              textAlign: "center",
            }}
          >
            {!admin ? (
              <>
                <List>
                  <ListItem button component={Link} to={`${url}`}>
                    <ListItemIcon>
                      <LibraryBooksOutlined />
                    </ListItemIcon>
                    <ListItemText primary="My Orders" />
                  </ListItem>
                </List>
                <List>
                  <ListItem button component={Link} to={`${url}/review`}>
                    <ListItemIcon>
                      <FeedbackSharp />
                    </ListItemIcon>
                    <ListItemText primary="Review" />
                  </ListItem>
                </List>
                <List>
                  <ListItem button component={Link} to={`${url}/pay`}>
                    <ListItemIcon>
                      <Money />
                    </ListItemIcon>
                    <ListItemText primary="Pay" />
                  </ListItem>
                </List>{" "}
              </>
            ) : (
              <>
                <List>
                  <ListItem button component={Link} to={`${url}`}>
                    <ListItemIcon>
                      <ProductionQuantityLimitsTwoTone />
                    </ListItemIcon>
                    <ListItemText primary="Manage All Orders" />
                  </ListItem>
                </List>
                <List>
                  <ListItem button component={Link} to={`${url}/addProduct`}>
                    <ListItemIcon>
                      <Add />
                    </ListItemIcon>
                    <ListItemText primary="Add A Product" />
                  </ListItem>
                </List>
                <List>
                  <ListItem button component={Link} to={`${url}/manageProduct`}>
                    <ListItemIcon>
                      <DeleteForever />
                    </ListItemIcon>
                    <ListItemText primary="Manage products" />
                  </ListItem>
                </List>
                <List>
                  <ListItem button component={Link} to={`${url}/makeAdmin`}>
                    <ListItemIcon>
                      <AdminPanelSettings />
                    </ListItemIcon>
                    <ListItemText primary="Make New Admin" />
                  </ListItem>
                </List>
              </>
            )}
            <Divider />
            {admin && <Chip label="Admin" color="error" variant="outlined" />}
            <Grid container spacing={2}>
              <Grid item xs>
                <Typography variant="subtitle2" noWrap component="div">
                  User: {user.displayName}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography
                  variant="span"
                  component="div"
                  noWrap
                  gutterBottom
                  sx={{ textAlign: "center" }}
                >
                  {user.email}
                </Typography>
              </Grid>
            </Grid>
            <List sx={{ bgcolor: "#dd3333" }}>
              <ListItem onClick={logOut} button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Log out" />
              </ListItem>
            </List>
          </Box>
        </Paper>
      </ThemeProvider>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#800000",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <Typography variant="h6" noWrap component="div">
              Planet Action Figures
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          bgcolor: "#fcede4",
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: "100vh",
          overflow: "auto",
        }}
      >
        {/* /* ------------------------ All Nested Routes Section -----------------------  */}

        <Toolbar />
        <Switch>
          {!admin ? (
            <Route exact path={path}>
              <Orders />
            </Route>
          ) : (
            <AdminRoute exact path={path}>
              <AllOrders />
            </AdminRoute>
          )}

          <Route path={`${path}/review`}>
            <Review />
          </Route>
          <Route path={`${path}/pay`}>
            <Pay />
          </Route>

          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct />
          </AdminRoute>
          <AdminRoute path={`${path}/manageProduct`}>
            <ManageProduct />
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
