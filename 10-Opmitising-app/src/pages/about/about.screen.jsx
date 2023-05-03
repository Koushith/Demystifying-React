import useIsUserOnline from "../../hooks/useIsOnline";
import { ProfileClass } from "../profile-class/profile-class";
import { ProfileFunctional } from "../profile-functional/profile-fun";

const AboutScreen = () => {
  const isOnline = useIsUserOnline();

  if (!isOnline) {
    return <h1>Looks like your internet is down</h1>;
  }
  return (
    <>
      <h2>This is About Screen- rendering profile screen</h2>
      {isOnline ? <h1>Onlineeeeee</h1> : <h1>Offlinee.........</h1>}
      <ProfileFunctional name="koushith" age="23" />

      {/* <ProfileClass name="preetham" age="20" /> */}
    </>
  );
};

export default AboutScreen;
