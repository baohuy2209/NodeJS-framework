import useActionState from "./useActionState";
import Button from "../useArray/Button";
import React from "react";
async function increment(previousState: number, formData: FormData) {
  return previousState + 1;
}
export default function ActionStateFormComp() {
  const [state, formAction] = useActionState(increment, 0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formAction(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      {state}
      <Button type="submit">Increment</Button>
    </form>
  );
}
