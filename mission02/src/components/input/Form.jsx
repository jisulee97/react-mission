import styles from "@/styles/Form.module.css";

function Form() {
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
            className={`${styles.Input}`}
          />
          <input
            type="password"
            label="비밀번호"
            name="userPassword"
            placeholder="비밀번호"
            className={`${styles.Input}`}
          />
        </fieldset>
      </form>
    </>
  );
}

export default Form;
