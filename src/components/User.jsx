import { useContext } from "react";
import styles from "./User.module.css";
import { SessionContext } from "../context/SessionContext";

export function User() {
  const { session, handleSignOut } = useContext(SessionContext);

  if (!session) {
    return (
      <div className={styles.container}>
        <h1>User not signed in!</h1>
      </div>
    );
  }

  const { username, admin } = session.user.user_metadata;

  return (
    <div className={styles.container}>
      <h1>{admin ? "Admin Account" : "User Account"}</h1>
      <div className={styles.userInfo}>
        <p>
          <strong>Username: </strong>
          {username}
        </p>
        <p>
          <strong>Email: </strong>
          {session.user.email}
        </p>
        <p>
          <strong>ID: </strong>
          {session.user.id}
        </p>
      </div>
      <button className={styles.button} onClick={handleSignOut}>
        SIGN OUT
      </button>
    </div>
  );
}
