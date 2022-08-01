import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const DashboardPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const getData = async () => {
    const response = await axios.get("http://localhost:8080/users");
    setUserData(response.data);
    console.log(response.data);
  };

  const deleteUser = async (id) => {
    await axios
      .delete(`http://localhost:8080/users/${id}`)
      .then(() => getData());
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((obj) => (
              <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.username ? obj.username : "NIL"}</td>
                <td>{obj.email ? obj.email : "NIL"}</td>
                <td>
                  <button
                    onClick={() => {
                      localStorage.setItem("username", obj.username);
                      localStorage.setItem("email", obj.email);
                      localStorage.setItem("id", obj.id);
                      navigate("/update-user");
                    }}
                    className="btn btn-success"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => deleteUser(obj.id)}
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
    </div>
  );
};
export default DashboardPage;
