import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function FormSec() {
  const [inValue, setInValue] = useState("");
  const [serverDatas, setServerData] = useState([]);

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
            {serverDatas.map((value, index) => (
              <li className="text-white flex max-w-96 justify-between mx-auto mt-5">
                <p>{value.inValue}</p>
                <div>
                  <Link to={`/update/${index}`}>
                    <button className="bg-green-500 py-1 px-3 rounded-lg me-4 ">
                      Update
                    </button>
                  </Link>

                  <button className="bg-red-500 py-1 px-3 rounded-lg">
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default FormSec;
