import { useCallback, useEffect, useState } from "react";

const App = () => {
  const [password, setPassword] = useState("Whatever");
  const [length, setLength] = useState(12);
  const [includeNum, setIncludeNum] = useState(false);
  const [includeChar, setIncludeChar] = useState(false);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
    if (includeNum) str += `0123456789`;
    if (includeChar) str += `~!@#$%^&*(){}`;

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, includeNum, includeChar, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, includeNum, includeChar, generatePassword]);

  return (
    <div className="bg-cyan-950 w-full max-w-3xl mx-auto my-16 py-4 px-8 rounded-xl">
      <h1 className="text-3xl font-bold  text-indigo-50 text-center w-full pb-1 border-indigo-300 border-b-2">
        Hello world!
      </h1>
      <div className="bg-indigo-950 p-4 rounded border-none my-4 text-indigo-100 text-xl">
        <div className="flex justify-start">
          <input
            type="text"
            className="w-full max-w-xl py-4 px-2 mr-2 rounded border-none outline-none text-orange-500 text-3xl"
            readOnly
            value={password}
          />
          <button className="bg-blue-800 max-w-28 w-full rounded hover:bg-blue-500 cursor-pointer duration-300  hover:border-y-2 hover:border-cyan-200">
            Copy
          </button>
        </div>
        <div className="flex justify-between pt-3 pb-2">
          <div className="flex gap-2 items-center">
            <input
              type="range"
              id="length"
              min={8}
              max={30}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label
              htmlFor="length"
              className="text-sm font-bold text-indigo-500"
            >
              Length
            </label>
            <p className="text-orange-400 font-bold">{length}</p>
          </div>

          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              id="includeNum"
              value={includeNum}
              onChange={() => setIncludeNum((prev) => !prev)}
            />
            <label
              className="text-sm font-bold text-indigo-500"
              htmlFor="includeNum"
            >
              Number
            </label>
          </div>

          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              id="includeChar"
              value={includeChar}
              onChange={() => setIncludeChar((prev) => !prev)}
            />
            <label
              className="text-sm font-bold text-indigo-500"
              htmlFor="includeChar"
            >
              Special Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
