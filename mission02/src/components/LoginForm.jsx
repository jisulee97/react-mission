import styles from "../styles/LoginForm.module.css";
import Form from "./input/Form";
import SimpleLoginButton from "./button/SimpleLoginButton";

function LoginForm() {
  return (
    <div className={`${styles.LoginForm}`}>
      <div className={`${styles.LoginFormInnerBox}`}>
        {/* Form  */}
        <Form />
        {/* 간편 로그인 */}
        <SimpleLoginButton />
        {/* 로그인 버튼 */}
        {/* 구분선 */}
        {/* 큐알코드 버튼 */}
        {/* text 버튼 */}
      </div>
    </div>
  );
}

export default LoginForm;
