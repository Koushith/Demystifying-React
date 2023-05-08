import { useEffect, useState } from "react";

export const useIsUserOnline = () => {
  const [isOnline, setIsonline] = useState(true);

  const handleOnline = () => {
    setIsonline(true);
  };

  const handleOffline = () => {
    setIsonline(false);
  };

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    console.log("offline hook triggered");
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      console.log("clean up from offline hook triggered");
    };
  }, []);

  return isOnline;
};
