import styles from "@/styles/Form.module.css";
import { useState } from "react";

function SimpleLoginButton() {
  const [check, setCheck] = useState(false);
  const [infoClicked, setInfoClicked] = useState(false);

  return (
    <div className={`${styles.SimpleLoginButton}`}>
      <div
        className={`${styles.SimpleLoginButton}`}
        onClick={() => {
          setCheck(!check);
        }}
      >
        <input
          type="checkbox"
          name="saveLoginInfo"
          className={`${styles.InfoToggle}`}
          value={check}
        />
        <span
          className={`${styles.SimpleLoginIcon} ${
            check
              ? styles.SimpleLoginIconChecked
              : styles.SimpleLoginIconUnchecked
          }`}
        />
        <span className={`${styles.SimpleLogin}`}>간편로그인 정보 저장</span>
      </div>

      <div
        className={`${styles.SimpleLoginImg}`}
        onClick={() => {
          setInfoClicked(!infoClicked);
        }}
      >
        <img src="/assets/infocircle.svg" alt="도움말 보기" />
      </div>
      <div
        className={`${styles.SimpleLoginSaveInfo} ${
          infoClicked ? styles.SimpleLoginSaveInfoClick : ""
        }`}
      >
        로그인한 계정의 정보가 저장됩니다. 개인정보 보호를 위해 개인 기기에서만
        사용해 주세요.
        <a
          href="/"
          className={`${styles.HelpInfo}`}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          도움말 보기
        </a>
      </div>
    </div>
  );
}

export default SimpleLoginButton;
