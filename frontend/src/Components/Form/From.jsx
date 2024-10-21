import React, { useEffect, useState } from "react";

function From() {
  const [inValue, setInValue] = useState("");
  const [serverDatas, setServerData] = useState([]);
  console.log(serverDatas);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => {
        return res.json();
      })
      .then((serverData) => {
        setServerData(serverData);
      });
  }, []);

  function handleForm(e) {
    e.preventDefault();

    const formData = { inValue };

    fetch("/api/userdata", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
      });
  }

  function handleInput(e) {
    setInValue(e.target.value);
  }

  return (
    <>
      <div>
        <h1>Form</h1>
        <form className="flex flex-col max-w-96 mx-auto" onSubmit={handleForm}>
          <label className="text-white text-center mb-4">Username</label>
          <input
            type="text"
            className="py-1 rounded-lg px-3"
            value={inValue}
            onChange={handleInput}
          />
          <button
            className="text-white mt-3 btn bg-purple-600 py-1 rounded-lg"
            type="submit"
          >
            submit
          </button>
        </form>
        <div>
          <ul>
            {serverDatas.map((value) => (
              <li className="text-white text-center mt-5">{value.inValue} </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default From;
