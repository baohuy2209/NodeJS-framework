import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Button from "./Button";

type TTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function FetchComp() {
  const [id, setId] = useState<number>(1);

  const { loading, error, value } = useFetch<TTodo>(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {},
    [id]
  );

  return (
    <div>
      <div>{id}</div>
      <Button
        className="bg-black text-white"
        onClick={() => setId((currentId) => currentId + 1)}
      >
        Increment ID
      </Button>

      <div className="flex flex-col gap-2">
        <div>Loading: {loading.toString()}</div>
        <div>{JSON.stringify(error, null, 2)}</div>
        <div>{JSON.stringify(value, null, 2)}</div>
      </div>
    </div>
  );
}

export default FetchComp;
