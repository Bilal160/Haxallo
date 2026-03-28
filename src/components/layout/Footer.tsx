import xIcon from "../../assets/footer/x.svg";
import linkedinIcon from "../../assets/footer/linkedin.svg";
import instaIcon from "../../assets/footer/insta.svg";
import facebookIcon from "../../assets/footer/facebook.svg";
import whatsappIcon from "../../assets/footer/whatsapp.svg";

const socialLinks = [
  { icon: xIcon, alt: "X (Twitter)" },
  { icon: linkedinIcon, alt: "LinkedIn" },
  { icon: facebookIcon, alt: "Facebook" },
  { icon: instaIcon, alt: "Instagram" },
  { icon: whatsappIcon, alt: "WhatsApp" },
];

const navLinks = ["Privacy policy", "Terms of service", "Contact us"];

const Footer = () => {
  return (
    <footer className="bg-primary px-6 md:px-12 py-5 font-secondary text-[#FFF6DF]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-8 text-center sm:text-left">
          <p className="text-sm font-normal whitespace-nowrap">
            All rights reserved Hexallo LLC 2023
          </p>
          <nav className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-white/70 transition-colors duration-200 whitespace-nowrap"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          {socialLinks.map(({ icon, alt }) => (
            <a
              key={alt}
              href="#"
              className="flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
            >
              <img src={icon} alt={alt} className="h-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer
