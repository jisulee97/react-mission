import styles from "@/styles/LoginButtons.module.css";

function LoginButtons({ label, name, onClick }) {
  let ColorOption =
    label === "로그인" ? styles.PrimaryColor : styles.SecondaryColor;
  let HoverColor =
    label === "로그인" ? styles.PrimaryHover : styles.SecondaryHover;

  return (
    <div>
      <button
        type="submit"
        className={`${styles.LoginButtons} ${ColorOption} ${HoverColor}`}
        aria-label={label}
        title={label}
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
}

export default LoginButtons;
