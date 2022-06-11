import { useEffect, useState } from "react";

const useGlobals = () => {
  const [toneStarted, setToneStarted] = useState(false);

  return { toneStarted, setToneStarted };
};

export default useGlobals;
