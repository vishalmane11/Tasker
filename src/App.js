import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [user, setuser] = useState([]);

  //  Task Number 1 start /////////////////
  function countCharacters(str) {
    str = [...str].filter((char) => char !== " ").join("");

    const result = [];

    for (const char of str) {
      const existing = result.find(([c]) => c === char);
      if (existing) {
        existing[1]++;
      } else {
        result.push([char, 1]);
      }
    }

    return result;
  }

  const inputStr = "vishal mane";
  const result = countCharacters(inputStr);
  console.log(result);
  //////////////////////////////////////////// Task 1 end ///////////////////////////
  async function adduser() {
    let randomid = Math.floor(Math.random() * 10);

    let response = await axios.get(`https://swapi.dev/api/people/${randomid}`);

    let user = response.data.name;
    setuser((prev) =>
      // [...user, { id: Date.now(), name: user }];
      [...prev, { id: Date.now(), name: user }]
    );
  }

  function deletehandler(id) {
    setuser((prev) => prev.filter((user) => user.id !== id));
  }
  return (
    <div>
      <div className="w-[100vw] h-[100vh] bg-red-400 flex flex-col items-center gap-8 pt-10">
        <button
          className="text-white text-2xl font-extrabold"
          onClick={() => adduser()}
        >
          Add Record
        </button>
        {user.map((ele) => {
          // console.log(ele);
          return (
            <div
              key={ele.id}
              className="w-[70%] h-[10%] bg-black flex p-3 items-center justify-between"
            >
              <h1 className="text-white ">{ele.name}</h1>

              <button
                className="text-white"
                onClick={() => deletehandler(ele.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
