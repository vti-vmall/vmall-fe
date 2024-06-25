import './rootLayout.css'
import {Outlet, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faList,
  faRightToBracket,
  faGear
} from '@fortawesome/free-solid-svg-icons'
import {useEffect} from "react";

const RootLayout = () => {
  const nav = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if(!token){
      nav("/account")
    }
  }, []);
  return (
      <>
        <Outlet />
      </>
  )
}

export default RootLayout
