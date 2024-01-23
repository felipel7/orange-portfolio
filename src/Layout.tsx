import { Button } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <h1>Navbar</h1>
      <Button>teste</Button>
      <Outlet />
    </>
  );
}
