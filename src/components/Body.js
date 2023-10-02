import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const Body = () => {
  const dispatch = useDispatch();

  const addItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      <h1>Body Component</h1>
      <button
        className="bg-green-600 p-2 m-3 rounded-md font-bold text-white"
        onClick={() => addItems("Shoes")}
      >
        Add+
      </button>
    </div>
  );
};

export default Body;
