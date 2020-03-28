import React, { useState, useEffect } from 'react';

import { useHistory, Link } from 'react-router-dom'

import api from '../../services/api';

import './css/style.css';

export default function EditItem({ match, navi }) {

  const history = useHistory();

  const [id, setId] = useState('');
  const [githubUsername, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    async function findItem(id) {
      const item = await api.get(`/devs/${id}`);
    
      setId(item.data._id);
      setGithubUsername(item.data.github_username);
      setTechs(item.data.techs.join(", "));
      setLatitude(item.data.location.coordinates[0]);
      setLongitude(item.data.location.coordinates[1]);
    }

    findItem(match.params.id);
  }, [match]);

  async function handleUpdate(id) {
    await api.put(`/devs/${id}`, {
      techs,
      latitude,
      longitude
    });

    history.push('/');
  }

  

  
  return (
    <div className="container">
      
      <Link className="back-button" to="/"> Voltar </Link>
      
      <div className="panel">
        Editando:
        <h1> {githubUsername} </h1>
        <form onSubmit={() => handleUpdate(match.params.id)}>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              value={techs}
              onChange={e => setTechs(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
                required
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="button" onClick={() => handleUpdate(id)}>Salvar alterações</button>
        </form>
      </div>
    </div>
  );
}
