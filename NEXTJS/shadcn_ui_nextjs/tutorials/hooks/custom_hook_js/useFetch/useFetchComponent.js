import useFetch from "./useFetch";
import React from "react";
const FetchPerson = () => {
  const res = useFetch("https://swapi.co/api/people/1/", {});
  if (!res.response) {
    return <div>Loading...</div>;
  }

  const person = res.response.name;
  return (
    <div>
      <h1>Hello, {person}!</h1>
    </div>
  );
};
export default FetchPerson;
