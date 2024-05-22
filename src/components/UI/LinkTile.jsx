import { Link } from "react-router-dom";

const LinkTile = ({ to, text, icon }) => {
  return (
    <Link
      to={to}
      className="flex flex-col gap-2 rounded-box p-4 justify-center items-center outline">
      <h2 className="text-3xl text-blue-600">{text}</h2>
      <div className="text-5xl text-blue-100">{icon}</div>
    </Link>
  );
};

export default LinkTile;
