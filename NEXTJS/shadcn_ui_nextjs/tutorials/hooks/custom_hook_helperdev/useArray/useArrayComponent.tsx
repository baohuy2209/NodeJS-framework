import useArray from "./useArray";
import Button from "./Button";

type TInitData = {
  id: number;
  name: string;
};

const initData: TInitData[] = [
  {
    id: 1,
    name: "JavaScript",
  },
  {
    id: 2,
    name: "React",
  },
  {
    id: 3,
    name: "Vue.js",
  },
];

function ArrayComp() {
  const { array, set, push, remove, filter, update, clear } =
    useArray<TInitData>(initData);

  return (
    <div className="flex flex-col gap-4">
      {array.map((data, index) => (
        <div key={data.id + Math.random()}>
          {index + 1}: {data.name}
        </div>
      ))}

      <Button onClick={() => push({ id: 4, name: "Nextjs" })}>Add new</Button>
      <Button onClick={() => update(0, { id: 1, name: "HelperDev" })}>
        Change First Element
      </Button>
      <Button onClick={() => remove(1)}>Remove Second Element</Button>
      <Button onClick={() => filter((item) => item.name === "Vue.js")}>
        Filter by name Vue.js
      </Button>
      <Button onClick={() => clear()}>Clear all</Button>
      <Button onClick={() => set(initData)}>Reset</Button>
    </div>
  );
}

export default ArrayComp;
