import './style.css'
import {useFormik} from "formik";
import {object, string} from "yup";
import Card from "../../../../common/components/Card";
import TextInput from "../../../../common/components/Form/TextInput";

const RegisterForm = ({onChangeForm, onSubmit}) => {
  const registerForm = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: ''
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
      .required('Không được để trống mật khẩu'),
      email: string()
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
      .required('Không được để trống email'),
    })
  })


  return (
      <>
        <div className={"login-form-container"}>
          <div className={"login-form"}>
            <Card>
              <div className={"text-center form-title"}>
                ĐĂNG KÝ TÀI KHOẢN
              </div>
              <div className={"login-form-card"}>
                {/*<img src={loginLogo} alt=""/>*/}
                <form onSubmit={registerForm.handleSubmit}>
                  <TextInput
                      onChange={registerForm.handleChange}
                      name={'username'}
                      value={registerForm.values.username}
                      type={"text"}
                      placeholder={"Tên đăng nhập"}
                      error={registerForm.errors.username}
                  />
                  <TextInput
                      onChange={registerForm.handleChange}
                      name='password'
                      value={registerForm.values.password}
                      type={"password"}
                      placeholder={"Mật khẩu"}
                      error={registerForm.errors.password}
                  />
                  <TextInput
                      onChange={registerForm.handleChange}
                      name='email'
                      value={registerForm.values.email}
                      type={"email"}
                      placeholder={"Email"}
                      error={registerForm.errors.email}
                  />
                  <button type={"submit"}>Đăng ký</button>
                  <div className={"go-login"}>
                    Bạn đã có tài khoản? <a onClick={() => onChangeForm(true)} href="#">Đăng nhập</a>
                  </div>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </>
  )
}

export default RegisterForm
