import { useCallback, useEffect, useRef, useState } from "react";

const useOutsideClickHandler = (initialValue: boolean) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(initialValue);

  const handleClickOutside = useCallback(
    (event) => {
      if (ref.current && !ref.current.contains(event.target)) setVisible(false);
    },
    [ref, setVisible]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [ref, handleClickOutside]);

  return { visible, setVisible, ref, handleClickOutside };
};

export default useOutsideClickHandler;
