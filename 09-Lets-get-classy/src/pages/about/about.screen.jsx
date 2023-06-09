import { ProfileClass } from "../profile-class/profile-class";
import { ProfileFunctional } from "../profile-functional/profile-fun";

export const AboutScreen = () => {
  const isOnline = useIsUserOnline();

  if (!isOnline) {
    return <h1>OOPS..... looks like there is no internet connection</h1>;
  }
  return (
    <>
      <h2>This is About Screen- rendering profile screen</h2>
      {isOnline ? <h1>Onlinee...</h1> : <h1>Offline........</h1>}
      <ProfileFunctional name="koushith" age="23" />

      {/* <ProfileClass name="preetham" age="20" /> */}
    </>
  );
};
