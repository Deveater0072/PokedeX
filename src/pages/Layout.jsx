import { Outlet, Link } from "react-router-dom";
import { Button } from "@mui/material";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
        <li>
            <Link to="/Home">
              <Button variant="contained">Home</Button>
            </Link>
          </li>
          <li>
            <Link to="/Favorites">
              <Button variant="contained">Favorites</Button>
            </Link>
          </li>
          <li>
            <Link to="/Arena">
              <Button variant="contained">Arena</Button>
            </Link>
          </li>
          <li>
            <Link to="/Login">
              <Button variant="contained">Login</Button>
            </Link>
          </li>
          <li>
            <Link to="/Registration">
              <Button variant="contained">Registration</Button>
            </Link>
          </li>
          <li>
            <Link to="/Logout">
              <Button variant="contained">Logout</Button>
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
