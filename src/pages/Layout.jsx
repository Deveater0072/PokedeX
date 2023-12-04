import { Outlet, Link } from "react-router-dom";
import { Button } from "@mui/material";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Favorites">
              <Button>Favorites</Button>
            </Link>
          </li>
          <li>
            <Link to="/Arena">
              <Button>Arena</Button>
            </Link>
          </li>
          <li>
            <Link to="/Login">
              <Button>Login</Button>
            </Link>
          </li>
          <li>
            <Link to="/Registration">
              <Button>Registration</Button>
            </Link>
          </li>
          <li>
            <Link to="/Logout">
              <Button>Logout</Button>
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
