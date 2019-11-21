import React, { useState } from "react";

import axios from "axios";

const handleSubmit = async (setStatus, setContent, cnpj) => {
  const res = await axios.get(`/${cnpj}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "text/plain"
    }
  });
  setContent(await res.data);
  setStatus(true);
};

const Main = () => {
  const [content, setContent] = useState([]);
  const [cnpj, setCnpj] = useState("");
  const [status, setStatus] = useState(false);

  return (
    <div>
      {status === false ? (
        <>
          <label>Digite o CNPJ</label> <br />
          <input type="text" onChange={e => setCnpj(e.target.value)} />
          <input
            type="submit"
            value="Buscar"
            onClick={() => handleSubmit(setStatus, setContent, cnpj)}
          />
        </>
      ) : (
        <div>
          <h1>{content.fantasia}</h1>
        </div>
      )}
    </div>
  );
};

export default Main;
