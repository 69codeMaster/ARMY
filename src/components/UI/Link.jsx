import { Link } from "react-router-dom";

const NavLink = ({ to, text }) => {
  return (
    <Link
      to={to}
      className="text-sm text-gray-300 text-start hover:underline hover:text-info inline-block">
      {text}
    </Link>
  );
};

export default NavLink;
