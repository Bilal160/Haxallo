import languageIcon from "../assets/common/language.svg";
import flagIcon from "../assets/common/flag.svg";

export const mainHeaderMenuItems = [
  { id: 1, label: "Events Calendar", to: "/events-calendar", type: "link" },
  { id: 2, label: "Blog", to: "/blog", type: "link" },
  { id: 3, label: "Limelight", to: "/limelight", type: "link" },
  {
    id: 4,
    label: "EN (US)",
    type: "dropdown",
    icon: languageIcon,
    options: ["English (US)", "Spanish (ES)", "French (FR)"],
  },
  {
    id: 5,
    label: "United States",
    type: "dropdown",
    icon: flagIcon,
    options: ["United States", "Canada", "Mexico"],
  },
  {
    id: 6,
    label: "California",
    type: "dropdown",
    options: ["California", "New York", "Texas"],
  },
  { id: 7, label: "Sign In | Up", to: "/sign-in", type: "link" },
  { id: 8, label: "Business", to: "/business", type: "link" },
  { id: 9, label: "Create Event", to: "/create-event", type: "link" },
];
