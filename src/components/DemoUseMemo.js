import { useMemo, useState } from "react";

const DemoUseMemo = () => {
  const [fieldA, setFieldA] = useState("");
  const [fieldB, setFieldB] = useState("");

  const heavyCalculation = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    console.log("Heavy Calculation!!");
    return sum;
  }, [fieldA]);

  return (
    <div>
      <h1>useMemo hook example</h1>
      <label>Field A</label>
      <input
        className="border  border-gray-500 outline-none ml-10"
        type="text"
        onChange={(e) => setFieldA(e.target.value)}
        value={fieldA}
      />
      <span>
        When you update this text field, it takes time to print info in log
      </span>
      <br /> <br />
      <label>Field B</label>
      <input
        className="border border-gray-500 outline-none ml-10"
        type="text"
        onChange={(e) => setFieldB(e.target.value)}
        value={fieldB}
      />
      <span>
        heavy calculation will not be printed when you update this field
      </span>
      <br />
      <h1>Result : {heavyCalculation}</h1>
    </div>
  );
};

export default DemoUseMemo;
