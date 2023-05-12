import { useState } from "react";
import useIsUserOnline from "../../hooks/useIsOnline";
import { ProfileClass } from "../profile-class/profile-class";
import { ProfileFunctional } from "../profile-functional/profile-fun";

const Section = (props) => {
  const { isShown, onChange } = props;

  return (
    <>
      <h1>{props.title}</h1>
      <button onClick={onChange}>Show</button>{" "}
      <button onClick={onChange}>Hide</button>
      {isShown && <h2>{props.description}</h2>}
    </>
  );
};

const AboutScreen = () => {
  const isOnline = useIsUserOnline();

  const [isShown, setIsShown] = useState(false);

  const toggleChange = () => {
    setIsShown(!isShown);
  };

  if (!isOnline) {
    return <h1>Looks like your internet is down</h1>;
  }
  return (
    <>
      <h2>This is About Screen- rendering profile screen</h2>
      {isOnline ? <h1>Onlineeeeee</h1> : <h1>Offlinee.........</h1>}
      <ProfileFunctional name="koushith" age="23" />
      <hr />
      <Section
        title="About swiggy"
        description="loremipsmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"
        isShown={isShown}
        onChange={toggleChange}
      />
      <Section
        title="About swiggy"
        description="loremipsmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"
        isShown={isShown}
        onChange={toggleChange}
      />{" "}
      {/* <ProfileClass name="preetham" age="20" /> */}
    </>
  );
};

export default AboutScreen;
