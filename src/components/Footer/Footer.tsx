import "./Footer.css";

type FooterProps = {
  year: number;
};

const Footer = ({ year }: FooterProps) => {
  return (
    <footer className="flex-center">
      <svg
        height="14"
        viewBox="0 0 24 24"
        width="14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"/><path d="M14 9.75a3.016 3.016 0 0 0-4.163.173a2.993 2.993 0 0 0 0 4.154A3.016 3.016 0 0 0 14 14.25" />
        </g>
      </svg>
      <p role="note">
        { year } Learning and Programming | Coded by{" "}
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
