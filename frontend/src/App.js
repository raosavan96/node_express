import React from "react";
import FormSec from "./Components/Form/FormSec";
import UpdateSec from "./Components/Form/UpdateSec";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormSec />} />
          <Route path="/update/:id" element={<UpdateSec />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
