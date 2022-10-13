
import {Outlet } from "react-router-dom";
import NaveBar from "../components/NaveBar";
import StyledNavBar from "./StyledNavBar"
function SharedLayout() {
  return (
    <>
    <StyledNavBar />
      <Outlet />
    </>
  )
}

export default SharedLayout

