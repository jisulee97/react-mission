import TextButtons from "./button/TextButtons";
import styles from "@/styles/Footer.module.css";
import CopyRight from "./CopyRight";

function Footer() {
  return (
    <div>
      {/* footer text 버튼 리스트 */}
      <div className={`${styles.Footer}`}>
        <TextButtons name="이용약관" />
        <TextButtons name="개인정보 처리방침" />
        <TextButtons name="운영정책" />
        <TextButtons name="고객센터" />
        <TextButtons name="공지사항" />
        <TextButtons name="한국어" />
      </div>
      <div className={`${styles.FooterCopyRight}`}>
        {/* 카피라이트 */}
        <CopyRight />
      </div>
    </div>
  );
}

export default Footer;
