import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div>
        <Link to="/home" className="underline text-blue-600 mr-5">
          Home
        </Link>{" "}
        <Link to="/accordian" className="underline text-blue-600 mr-5">
          Accordian
        </Link>
        <Link to="/fetchapi" className="underline text-blue-600 mr-5">
          Fetch API
        </Link>
        <Link to="/pagination" className="underline text-blue-600">
          Pagination
        </Link>
      </div>
    </>
  );
}
