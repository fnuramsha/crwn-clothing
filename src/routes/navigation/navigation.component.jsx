import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../components/contexts/user-context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  console.log(currentUser);
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/Shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              Sign Out{" "}
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
