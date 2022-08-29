import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, fetchUsers } from "../userActions";

const Users = () => {
  const [newUser, setNewUser] = useState("");
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  console.log(userData);

  // handleDelete deletes the sepecired user based on the id provided
  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteUser(id));
  };

  // handleSubmit adds the new user with the id equakl to toal length of list + 1
  const handleSubmit = () => {
    setNewUser("");
    dispatch(addUser({ id: userData.users.length + 1, name: newUser }));
  };
  return (
    <div className="flex justify-center flex-col">
      <h1 className="text-5xl p-5 font-bold text-secondary text-center">
        Users
      </h1>
      <input
        type="text"
        className="input input-primary mx-10 my-5"
        placeholder="Add User"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
      />
      {/* button to add a user */}
      <button onClick={handleSubmit} className="btn btn-secondary mx-10">
        Add
      </button>
      {userData.users.map((user) => {
        return (
          <div className="flex justify-between mx-5 mt-5">
            <h1>{user.name}</h1>
            {/* delete user inputs */}
            <button
              className="btn btn-primary"
              onClick={() => handleDelete(user.id)}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
