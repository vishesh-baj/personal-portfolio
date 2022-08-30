import React from "react";
export type ProfileProps = {
  name: string;
};
const Profile = ({ name }: ProfileProps) => {
  return <div> Profile component, Name is {name}</div>;
};

export default Profile;


// The candidate - Yash is well versed in technical assessment. He knows basic understanding of react redux. Communication is average. Machine test should be provided for further assessment.