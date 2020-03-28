import React, { useEffect, useState } from "react";

import api from "../../services/api";

import "./css/app.css";
import "./css/sidebar.css";
import "./css/main.css";

import DevForm from "../../components/DevForm";
import DevItem from "../../components/DevItem";

function App() {
  const [devs, setDevs] = useState([]);

  async function loadDevs() {
    const response = await api.get("devs");

    setDevs(response.data);
  }

  useEffect(() => {
    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post("/devs", data);
    setDevs([...devs, response.data]);
  }

  async function handleDelete(id) {
    await api.delete(`/devs/${id}`);
    loadDevs();
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.length > 0 ? 
            devs.map(dev => (
              <DevItem key={dev._id} dev={dev} onDelete={handleDelete} />
            )) : (<h2>Nenhum cadastro realizado</h2>)
          }
        </ul>
      </main>
      
    </div>
  );
}

export default App;
