import React from "react";
import { Link } from 'react-router-dom';

import "./style.css";

function DevItem({ dev, onDelete }) {

  async function handleDelete(id) {
    // eslint-disable-next-line no-restricted-globals
    const response = confirm("Are you sure?");
    if (response) {
      await onDelete(id);
    }
  }

  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(", ")}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>
        Acessar perfil no Github
      </a>
      
      <br />

      <Link to={`/edit/${dev._id }`} className="btn update-btn">
        <span>Atualizar dev</span>
      </Link>

      <button onClick={() => handleDelete(dev._id)} className="btn remove-btn">
        Remover dev
      </button>
    </li>
  );
}

export default DevItem;
