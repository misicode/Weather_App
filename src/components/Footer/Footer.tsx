import "./Footer.css";

type FooterProps = {
  year: number;
};

const Footer = ({ year }: FooterProps) => {
  return (
    <p className="credits" role="note">
      © { year } Learning and Programming | Coded by{" "}
      <a
        href="https://github.com/misicode/WS-Weather"
        target="_blank"
        rel="noreferrer"
      >
        MISICODE
      </a>
    </p>
  );
}

export default Footer;
