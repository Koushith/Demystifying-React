import { useState } from "react";
import { useIsUserOnline } from "../../../hooks/useIsOnline";
import { ProfileClass } from "../profile-class/profile-class";
import { ProfileFunctional } from "../profile-functional/profile-fun";

const Section = (props) => {
  const { title, description, isVisible, setIsVisible } = props;

  return (
    <div style={{ border: "1px solid black", padding: 2 }}>
      <h1>{title}</h1>

      {isVisible ? (
        <>
          <button
            onClick={() => setIsVisible(false)}
            style={{ padding: 2, fontSize: 12 }}
          >
            hide
          </button>
          <h2>{description}</h2>
        </>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          style={{ padding: 2, fontSize: 12 }}
        >
          show
        </button>
      )}
    </div>
  );
};

export const AboutScreen = () => {
  const isOnline = useIsUserOnline();
  const [visibleSection, setVisibleSection] = useState("");

  if (!isOnline) {
    return <h1>OOPS..... looks like there is no internet connection</h1>;
  }

  return (
    <>
      <h2>This is About Screen - rendering profile screen</h2>
      {isOnline ? <h1>Online...</h1> : <h1>Offline...</h1>}
      {/* <ProfileFunctional name="koushith" age="23" /> */}

      {/* <ProfileClass name="preetham" age="20" /> */}

      <Section
        title="About Swiggy"
        description="Swiggy is founded by ex-Flipkart employees..."
        isVisible={visibleSection === "About Swiggy"}
        setIsVisible={() => {
          setVisibleSection(
            visibleSection === "About Swiggy" ? "" : "About Swiggy"
          );
        }}
      />

      <Section
        title="Teams"
        description="Swiggy consists of 50 members on board..."
        isVisible={visibleSection === "Teams"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "Teams" ? "" : "Teams")
        }
      />

      <Section
        title="Contact"
        description="Contact Swiggy for more information..."
        isVisible={visibleSection === "Contact"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "Contact" ? "" : "Contact")
        }
      />

      <Section
        title="Join"
        description="Join Swiggy and be a part of our team..."
        isVisible={visibleSection === "Join"}
        setIsVisible={() => setVisibleSection("Join")}
      />

      <Section
        title="Funding"
        description="Swiggy has secured funding from various investors..."
        isVisible={visibleSection === "Funding"}
        setIsVisible={() => setVisibleSection("Funding")}
      />
    </>
  );
};
