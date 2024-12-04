import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Client() {
  const [moncli, setMoncli] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    nom: "",
    cin: "",
    contact: "",
    adresse: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    getClient();
  }, []);

  // Récupérer la liste des clients
  const getClient = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/client/");

      setMoncli(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Ajouter ou mettre à jour un utilisateur
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        // Mise à jour
        await axios.put(
          `http://127.0.0.1:8000/api/client/${formData.id}/`,
          formData
        );
        setMoncli(
          moncli.map((cli) =>
            cli.id === formData.id ? { ...cli, ...formData } : cli
          )
        );
        setIsEditing(false);
      } else {
        // Ajout
        const response = await axios.post(
          "http://127.0.0.1:8000/api/client/",
          formData
        );
        setMoncli([...moncli, response.data]);
      }
      setFormData({ id: null, nom: "", cin: "", contact: "", adresse: "" });
    } catch (error) {
      console.log("Erreur lors de l'envoi des données :", error);
    }
  };

  // Remplir les données dans le formulaire pour modifier
  const handleEdit = (client) => {
    setFormData(client);
    setIsEditing(true);
  };

  // Supprimer un utilisateur
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/client/${id}`);
      console.log("Utilisateur supprimé avec succès");
    } catch (error) {
      console.error("Erreur lors de la suppression de l’utilisateur:", error);
    }
  };

  return (
    <>
      <div className="header">
        <div className="header2">
          <form onSubmit={handleSubmit}>
            <div className="fieldset">
              <h1 className="user">Gestion des Client</h1>
              <table>
                <tbody>
                  <tr>
                    <td>
                      {" "}
                      <label className="labelClass" htmlFor="nom">
                        {" "}
                        Nom:{" "}
                      </label>{" "}
                    </td>
                    <td>
                      <input
                        className="inputClass"
                        type="text"
                        name="nom"
                        id="nom"
                        value={formData.nom}
                        onChange={(e) =>
                          setFormData({ ...formData, nom: e.target.value })
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="labelClass" htmlFor="cin">
                        CIN:{" "}
                      </label>
                    </td>
                    <td>
                      <input
                        className="inputClass"
                        type="text"
                        name="cin"
                        id="cin"
                        value={formData.cin}
                        onChange={(e) =>
                          setFormData({ ...formData, cin: e.target.value })
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <label className="labelClass" htmlFor="contact">
                        Contact:{" "}
                      </label>
                    </td>
                    <td>
                      <input
                        className="inputClass"
                        type="number"
                        name="contact"
                        id="contact"
                        value={formData.contact}
                        onChange={(e) =>
                          setFormData({ ...formData, contact: e.target.value })
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <label className="labelClass" htmlFor="adresse">
                        Adresse:{" "}
                      </label>
                    </td>
                    <td>
                      <input
                        id="adresse"
                        className="inputClass"
                        type="text"
                        name="adresse"
                        value={formData.adresse}
                        onChange={(e) =>
                          setFormData({ ...formData, adresse: e.target.value })
                        }
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <button className="valider" type="submit">
                {isEditing ? "Mettre à jour" : "Valider"}
              </button>
            </div>
          </form>
          <div>
            <h2>Liste des utilisateur</h2>
            <br />
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Nom</th>
                  <th>cin</th>
                  <th>Contact</th>
                  <th>Adresse</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {moncli.map((utilisateur, index) => {
                  return (
                    <tr key={index}>
                      <td>{utilisateur.id}</td>
                      <td>{utilisateur.nom}</td>
                      <td>{utilisateur.cin}</td>
                      <td>{utilisateur.contact}</td>
                      <td>{utilisateur.adresse}</td>
                      <td>
                        <button onClick={() => handleEdit(utilisateur)}>
                          Modifier
                        </button>
                        <button onClick={() => handleDelete(utilisateur.id)}>
                          Supprimer{" "}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Client;
