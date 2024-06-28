import {useEffect, useState} from "react";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import './accountPage.css'
import welcome from '../../asset/img/welcome.png'
import {login, register} from "../../common/api/authService";
import {useNavigate} from "react-router-dom";

const AccountPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  const nav = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if(token){
      nav("/")
    }
  }, []);

  const handleRegisterFormSubmitted = async (data) => {
    try {
      await register(data)
      alert('Đăng ký thành công!')
      nav('/account')
    }catch (error){
      alert('Đã xảy ra lỗi, vui lòng thử lại sau')
    }
  }

  const handleLoginFormSubmitted = async (data) => {
    try {
      let loginResponse = await login(data)
      let token = loginResponse.data.data.token;
      console.log(token)
      localStorage.setItem("token", token)
      nav("/")
    }catch (error){
      alert('Đã xảy ra lỗi, vui lòng thử lại sau')
    }
  }

  return (
      <>
        <div className={"welcome-container"}>
          <img src={welcome} alt=""/>
        </div>
        {
          !isLogin && <RegisterForm onChangeForm={setIsLogin}
                                    onSubmit={handleRegisterFormSubmitted}
            />
        }
        {
          isLogin && <LoginForm onChangeForm={setIsLogin}
                                onSubmit={handleLoginFormSubmitted}
            />
        }
      </>
  )
}

export default AccountPage
