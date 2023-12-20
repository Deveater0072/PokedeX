import { Outlet, Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Stack spacing={1} >
        <Link to="/Home">
          <Button variant="contained">Home</Button>
        </Link>
        <Link to="/Favorites">
          <Button variant="contained">Favorites</Button>
        </Link>
        <Link to="/Arena">
          <Button variant="contained">Arena</Button>
        </Link>
        <Link to="/Login">
          <Button variant="contained">Login</Button>
        </Link>
        <Link to="/Registration">
          <Button variant="contained">Registration</Button>
        </Link>
        <Link to="/Logout">
          <Button variant="contained">Logout</Button>
        </Link>
      </Stack>
      <Outlet />
    </>
  );
};

export default Layout;
