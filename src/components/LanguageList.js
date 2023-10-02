import { useState } from "react";

const LanguageList = () => {
  const [language, setLanguage] = useState("");
  const [allLanguages, setAllLanguages] = useState([]);

  const addLanguage = () => {
    setAllLanguages([...allLanguages, language]);
    setLanguage("");
  };
  console.log(allLanguages);

  return (
    <div className="w-1/2 border mx-auto p-5">
      <div>
        <h1 className="text-center font-bold bg-gray-500 mb-2 text-white">
          Language List
        </h1>
        <input
          className="outline-none border border-gray-500 p-2"
          type="text"
          placeholder="Enter the language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
        <button
          className="bg-slate-500 p-2 px-5 text-white font-bold ml-2 rounded-md"
          onClick={() => addLanguage()}
        >
          Add
        </button>
      </div>
      <div className="w-1/2">
        <div>
          <table className="border-separate border border-gray-500">
            <thead>
              <tr>
                <th className="border border-gray-400 px-2">Id</th>
                <th className="border border-gray-400 px-5 w-full">Language</th>
              </tr>
            </thead>
          </table>
        </div>
        {allLanguages.map((language, index) => (
          <div key={index}>
            <table className="border-separate border border-gray-500">
              <tbody>
                <tr>
                  <td className="border border-gray-400 px-3">{index + 1}</td>
                  <td className="border border-gray-400 px-5 w-full">
                    {language}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageList;
