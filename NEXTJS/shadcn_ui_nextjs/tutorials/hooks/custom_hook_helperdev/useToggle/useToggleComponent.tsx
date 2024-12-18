import useToggle from "./useToggle";
import Button from "../useArray/Button";

export default function ToggleComp() {
  const [value, toggleValue] = useToggle(false);
  return (
    <div className="flex flex-col gap-3">
      <div>{value.toString()}</div>
      <Button onClick={() => toggleValue()}>Toggle</Button>
      <Button onClick={() => toggleValue(true)}>Make True</Button>
      <Button onClick={() => toggleValue(false)}>Make false</Button>
    </div>
  );
}
