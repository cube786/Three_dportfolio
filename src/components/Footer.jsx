import { Link } from "react-router-dom";
import { socialLinks } from "../constants";
import { SectionWrapper } from "../hoc";

const Footer = () => {
  return (
    <footer className="footer font-poppins">
      {/* <hr className="border-slate-200" /> */}

      <div className="footer-container flex flex-col md:flex-row justify-between items-center gap-2">
        <p>
          © {new Date().getFullYear()} <strong>Aneesh Abdul Rahman</strong>. All rights reserved.
        </p>

        <div className="flex gap-3 justify-center items-center">
          {socialLinks.map((link) => {
            if (link.type === "internal") {
              return (
                <Link key={link.name} to={link.link}>
                  <img
                    src={link.iconUrl}
                    alt={link.name}
                    className="w-10 h-10 object-contain"
                  />
                </Link>
              );
            }

            if (link.name === "Phone") {
              return (
                <a key={link.name} href={link.link}>
                  <img
                    src={link.iconUrl}
                    alt={link.name}
                    className="w-12 h-15 object-contain"
                  />
                </a>
              );
            }

            return (
              <a
                key={link.name}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className="w-12 h-11 object-contain"
                />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer, '');
