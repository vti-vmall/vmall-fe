import './rootLayout.css'
import {Outlet, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faList,
  faRightToBracket,
  faGear
} from '@fortawesome/free-solid-svg-icons'
import {useEffect, useState} from "react";
import logo from '../asset/img/logo.png'
import banner from '../asset/img/banner.png'
import {order} from "../common/api/orderClient";
const RootLayout = message => {
  const nav = useNavigate();
  const [username, setUsername] = useState('');
  useEffect(() => {
    let token = localStorage.getItem("token");
    if(!token){
      nav("/account")
    }
  }, []);

  const handleOrder = async () => {
    try {
      const orderResponse = await order(username);
      const phone = orderResponse.data.data.username;
      alert('Found: ' + phone)
    }catch (err){
      alert('Đã xảy ra lỗi, vui lòng thử lại')
    }
  }

  const handleUsernameInputChanged = (e) => {
    e.preventDefault();
    setUsername(e.target.value)
  }

  return (
      <div className={"page-container"}>
        <div className={"page-header"}>
          <div className={"page-logo"}>
            <img src={logo} alt=""/>
          </div>
          <div className={"search-bar"}>
            <input type="text"
                   placeholder={"Mua gì hôm nay"}
            />
          </div>
          <div className={"shopping-area"}>

          </div>
        </div>
        <div className={"page-slogan"}>
          Yên tâm mua sắm ở bất cứ nơi đâu bạn muốn
        </div>
        <div className={"page-body"}>
          <div className={"category-area"}>

          </div>
          <div className={"main-area"}>
            <div className={"banner"}>
              <img src={banner} alt=""/>
            </div>
            <div className={"content"}>
              <Outlet />
              <button onClick={handleOrder}
                      id={"demo-btn"}>Demo call API from Mall to User service</button>
              <input type="text"
                     onChange={handleUsernameInputChanged}
                     value={username}
                     placeholder={"username"}/>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
  )
}

export default RootLayout
