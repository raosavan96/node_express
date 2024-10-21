import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateSec() {
  const navigate = useNavigate();

  const [apiId, setApiId] = useState("");
  const { id } = useParams();

  function handleUpdate(e) {
    e.preventDefault();

    let updateV = { apiId };

    fetch(`/api/updateValue/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateV)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.message) {
          navigate("/");
        }
      });
  }

  useEffect(() => {
    fetch(`/api/mainuser/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setApiId(result.inValue);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Update</h1>
        <form
          className="flex flex-col max-w-96 mx-auto"
          onSubmit={handleUpdate}
        >
          <label className="text-white text-center mb-4">Username</label>
          <input
            value={apiId}
            onChange={(e) => {
              setApiId(e.target.value);
            }}
            type="text"
            className="py-1 rounded-lg px-3"
          />
          <button
            className="text-white mt-3 btn bg-purple-600 py-1 rounded-lg"
            type="submit"
          >
            Update
          </button>
        </form>
        s
      </div>
    </>
  );
}

export default UpdateSec;
