import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import {object, string} from 'yup'
import Card from "../../../../common/components/Card";
import TextInput from "../../../../common/components/Form/TextInput";
import './style.css'
import {useState} from "react";

const LoginForm = ({onChangeForm, onSubmit}) => {
  const [showLoading, setShowLoading] = useState(false);
  const navigate = useNavigate();

  const loginForm = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
     onSubmit(values)
    },
    validationSchema: object().shape({
      username: string()
      .min(2, 'Tên đăng nhập phải có ít nhất 2 ký tự')
      .max(10, ' Tên đăng nhập không vượt quá 10 ký tự')
      .required('Không dược để trống tên đăng nhập'),
      password: string()
      .min(6, 'Mât khẩu phải có ít nhất 6 ký tự')
      .max(12, 'Mật khẩu không quá 12 ký tự')
      .required('Không được để trống mật khẩu')
    })
  })

  return (
      <div className={"login-form-container"}>
        <div className={"login-form"}>
          <Card>
            <div className={"text-center form-title"}>
              ĐĂNG NHẬP
            </div>
            <div className={"login-form-card"}>
              {/*<img src={loginLogo} alt=""/>*/}
              <form onSubmit={loginForm.handleSubmit}>
                <TextInput
                    onChange={loginForm.handleChange}
                    name={'username'}
                    value={loginForm.values.username}
                    type={"text"}
                    placeholder={"Tên đăng nhập"}
                    error={loginForm.errors.username}
                />
                <TextInput
                    onChange={loginForm.handleChange}
                    name='password'
                    value={loginForm.values.password}
                    type={"password"}
                    placeholder={"Mật khẩu"}
                    error={loginForm.errors.password}
                />
                <button type={"submit"}>Đăng nhập</button>
                <div className={"go-register"}>
                  Bạn chưa có tài khoản? <a onClick={() => onChangeForm(false)} href="#">Đăng ký</a>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </div>
  )
}

export default LoginForm
