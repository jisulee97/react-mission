import styles from "@/styles/TextButtons.module.css";

function TextButtons({ name }) {
  let fontWeight =
    name === "개인정보 처리방침" ? styles.TextWeight : styles.none;
  return (
    <div>
      <a href="/" className={`${styles.TextButton} ${fontWeight}`}>
        {name}
      </a>
    </div>
  );
}

export default TextButtons;
