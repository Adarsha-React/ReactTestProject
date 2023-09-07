import { useState } from "react";

const User = (props) => {
  const [count1] = useState(1);
  const [count2] = useState(2);
  const { name } = props;
  return (
    <div className="border border-gray-500 m-5 p-3">
      <h1 className="font-bold text-sm">Data from Functioncal Component</h1>
      <h1>Count1 : {count1}</h1>
      <h1>Count2 : {count2}</h1>
      <h1>Name: {name}</h1>
      <h1>Location: Bangalore</h1>
      <h1>Adarsha-React</h1>
    </div>
  );
};

export default User;
