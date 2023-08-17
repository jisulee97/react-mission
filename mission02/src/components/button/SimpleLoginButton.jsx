import styles from "@/styles/Form.module.css";

function SimpleLoginButton() {
  return (
    <div className={`${styles.SimpleLoginButton}`}>
      <input
        type="checkbox"
        name="saveLoginInfo"
        value="false"
        className={`${styles.InfoToggle}`}
      ></input>
      <span className={`${styles.SimpleLogin}`}>간편로그인 정보 저장</span>
      <div className={`${styles.SimpleLoginImg}`}>
        <img src="/assets/infocircle.svg" alt="도움말 보기" />
      </div>
    </div>
  );
}

export default SimpleLoginButton;
