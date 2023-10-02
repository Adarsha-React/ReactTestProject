import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div>
      <h1 className="font-semibold text-sm">Learning Application</h1>
    </div>
  );
};

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-gray-200 p-3">
      <div className="w-2/3 flex justify-between mx-auto">
        <Title />
        <div className="flex list-none">
          <li className="pr-5 font-semibold text-sm cursor-pointer">
            <Link to={"/home"}>Home </Link>
          </li>
          <li className="pr-5 font-semibold text-sm cursor-pointer">
            <Link to={"/about"}>About </Link>
          </li>
          <li className="pr-5 font-semibold text-sm cursor-pointer">
            <Link to={"/cart"}>Cart - {cartItems.length} </Link>
          </li>
          <li className="pr-5 font-semibold text-sm cursor-pointer">
            <Link to={"/login"}>Login</Link>{" "}
          </li>
        </div>
      </div>
    </div>
  );
};

export default Header;
