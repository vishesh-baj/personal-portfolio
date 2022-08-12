import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
const App = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", age: 0 });

  // setting up connection with a specific collection in firebase database
  const usersCollectionRef = collection(db, "users");

  // GET _________________________________________________
  // fetch the data from the specific collection
  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // POST _________________________________________________
  // create user
  const addUsers = async () => {
    const response = await addDoc(usersCollectionRef, newUser).then(() =>
      getUsers()
    );
  };

  // PUT _________________________________________________
  // update user
  const updateUser = async (userId, userAge) => {
    const userDoc = doc(db, "users", userId);
    const newField = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  // DELETE ____________________________________________
  const deleteUser = async (userId) => {
    const userDoc = doc(db, "users", userId);
    await deleteDoc(userDoc).then(() => getUsers());
  };
  useEffect(() => {
    getUsers();
  }, []);

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    addUsers();
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-screen h-screen flex flex-col gap-5 justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-96">
        <div className="form-control">
          <label htmlFor="name" className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input
            className="input input-primary"
            placeholder="Name"
            type="text"
            name="name"
            id=""
            onChange={handleChange}
            value={newUser.name}
          />
        </div>
        <div className="form-control">
          <label htmlFor="age" className="label">
            <span className="label-text">What is your age?</span>
          </label>
          <input
            className="input input-primary"
            placeholder="Age"
            type="number"
            name="age"
            id="age"
            onChange={handleChange}
            value={newUser.age}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </form>

      <table className="table">
        <thead>
          <th>Name</th>
          <th>Age</th>
          <th>Edit</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>
                <button className="btn btn-primary">Edit</button>
              </td>
              <td>
                <button
                  onClick={() => deleteUser(user.id)}
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
  );
};

export default App;
