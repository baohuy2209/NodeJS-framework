import { useState } from "react";
import useEventListener from "../useEventListener/useEventListener";
export default function useOnlineState() {
  const [online, setOnline] = useState(navigator.onLine);
  useEventListener("online", () => setOnline(navigator.onLine));
  useEventListener("offline", () => setOnline(navigator.onLine));

  return online;
}
