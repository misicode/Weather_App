import "./Footer.css";

type FooterProps = {
  year: number;
};

const Footer = ({ year }: FooterProps) => {
  return (
    <footer>
      <p role="note">
        ⓒ { year } Learning and Programming | Coded by{" "}
        <a
          href="https://github.com/misicode/WeatherApp"
          target="_blank"
          rel="noreferrer"
        >
          MISICODE
        </a>
      </p>
    </footer>
  );
}

export default Footer;
