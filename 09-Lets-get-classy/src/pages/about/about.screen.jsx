import { ProfileClass } from "../profile-class/profile-class";
import { ProfileFunctional } from "../profile-functional/profile-fun";

export const AboutScreen = () => {
  return (
    <>
      <h2>This is About Screen- rendering profile screen</h2>

      <ProfileFunctional name="koushith" age="23" />

      {/* <ProfileClass name="preetham" age="20" /> */}
    </>
  );
};
