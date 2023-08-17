import styles from "../styles/LoginFormLayout.module.css";
import Form from "./input/Form";
import SimpleLoginButton from "./button/SimpleLoginButton";
import LoginButtons from "./button/LoginButtons";
import OrLine from "./OrLine";
import TextButtons from "./button/TextButtons";

function LoginForm() {
  return (
    <div className={`${styles.LoginForm}`}>
      <div className={`${styles.LoginFormInnerBox}`}>
        {/* Form  */}
        <Form />
        {/* 간편 로그인 */}
        <SimpleLoginButton />
        {/* 로그인 버튼 */}
        <LoginButtons label="로그인" name="로그인" />
        {/* 구분선 */}
        <OrLine />
        {/* 큐알코드 버튼 */}
        <LoginButtons label="QR코드 로그인" name="QR코드 로그인" />

        {/* text 버튼 */}
        <div className={`${styles.TextButtonBox}`}>
          <TextButtons name="회원가입" />
          <div className={`${styles.FindInfo}`}>
            <TextButtons name="계정 찾기" />
            <TextButtons name="비밀번호 찾기" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
