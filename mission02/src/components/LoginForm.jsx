import styles from "../styles/LoginFormLayout.module.css";
import Form from "./input/Form";
import SimpleLoginButton from "./button/SimpleLoginButton";
import LoginButtons from "./button/LoginButtons";
import OrLine from "./OrLine";
import TextButtons from "./button/TextButtons";
import { useEffect, useState } from "react";

function LoginForm() {
  const [form, setForm] = useState({
    id: "",
    password: "",
  });

  const [userData, setUserData] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:8090/api/collections/user/records")
      .then((value) => {
        return value.json();
      })
      .then((value) => {
        setUserData(value);
      });
  }, []);

  const onLogin = () => {
    let isLoginSuccess = false;

    userData.items.forEach((item) => {
      if (item.email === form.id && item.password === form.password) {
        alert("로그인 성공");
        isLoginSuccess = true;
      }
    });

    if (!isLoginSuccess) alert("로그인 실패");
  };
  return (
    <div className={`${styles.LoginForm}`}>
      <div className={`${styles.LoginFormInnerBox}`}>
        {/* Form  */}
        <Form form={form} setForm={setForm} />
        {/* 간편 로그인 */}
        <SimpleLoginButton />
        {/* 로그인 버튼 */}
        <LoginButtons label="로그인" name="로그인" onClick={onLogin} />
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
