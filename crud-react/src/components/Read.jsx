import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [userData, setUserData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080/users");
    setUserData(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    axios.delete(`http://localhost:8080/users/${id}`).then(() => fetchData());
  };

  //  set to local storage to store data to be edited
  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  return (
    <>
      <div className="overflow-x-auto">
        <div className=" flex justify-between py-5 px-10">
          <h1 className=" text-4xl">Read</h1>
          <Link to="/create" className="btn btn-secondary">
            Create
          </Link>
        </div>
        <table className="table w-full">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action-1</th>
              <th>Action-2</th>
            </tr>
          </thead>
          <tbody>
            {userData.map(({ id, name, email }) => (
              <tr key={id} className="hover">
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                  <Link to="/update">
                    <button
                      onClick={() => setToLocalStorage(id, name, email)}
                      className="btn btn-success"
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(id)}
                    className="btn btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Read;
