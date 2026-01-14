import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="mb-4">
        <Link to="/home" className="underline text-blue-600 mr-5">
          Home
        </Link>{" "}
        <Link to="/accordian" className="underline text-blue-600 mr-5">
          Accordian
        </Link>
        <Link to="/fetchapi" className="underline text-blue-600 mr-5">
          Fetch API
        </Link>
        <Link to="/pagination" className="underline text-blue-600 mr-5">
          Pagination
        </Link>
        <Link to="/hoc" className="underline text-blue-600 mr-5">
          HOC
        </Link>
        <Link to="/context" className="underline text-blue-600">
          React Context
        </Link>
      </div>
    </>
  );
}
