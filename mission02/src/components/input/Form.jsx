import { useState } from "react";
import styles from "@/styles/Form.module.css";

function Form() {
  const [isUserIdInputBottomLine, setIsUserIdInputBottomLine] = useState(false);
  const [isPasswordInputBottomLine, setIsPasswordInputBottomLine] =
    useState(false);

  const handleUserIdInputFocus = () => {
    setIsUserIdInputBottomLine(true);
    setIsPasswordInputBottomLine(false);
  };

  const handlePasswordInputFocus = () => {
    setIsPasswordInputBottomLine(true);
    setIsUserIdInputBottomLine(false);
  };

  const handleInputBlur = () => {
    setIsUserIdInputBottomLine(false);
    setIsPasswordInputBottomLine(false);
  };

  const userIdInputClassName = isUserIdInputBottomLine
    ? `${styles.Input} ${styles.InputBottomLine}`
    : styles.Input;
  const passwordInputClassName = isPasswordInputBottomLine
    ? `${styles.Input} ${styles.InputBottomLine}`
    : styles.Input;
  const addMessageClassName = isUserIdInputBottomLine
    ? styles.AddMessage
    : styles.AddMessageNone;

  return (
    <>
      <form>
        <fieldset className={`${styles.FieldSet}`}>
          <legend className={`${styles.A11yHidden}`}>로그인</legend>
          <input
            type="text"
            label="이메일, 아이디, 전화번호"
            name="userId"
            placeholder="카카오메일 아이디, 이메일, 전화번호"
            className={userIdInputClassName}
            onFocus={handleUserIdInputFocus}
            onBlur={handleInputBlur}
          />
          <div className={addMessageClassName}>
            <span className={`${styles.TipText}`}>TIP</span> 카카오메일이 있다면
            메일 아이디만 입력해 보세요.
          </div>
          <input
            type="password"
            label="비밀번호"
            name="userPassword"
            placeholder="비밀번호"
            className={passwordInputClassName}
            onFocus={handlePasswordInputFocus}
            onBlur={handleInputBlur}
          />
        </fieldset>
      </form>
    </>
  );
}

export default Form;
