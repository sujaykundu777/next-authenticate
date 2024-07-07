import React from "react";
import { doLogout } from "../actions";

const Logout: React.FC = () => {
  return (
    <form action={doLogout}>
      <button type="submit">Logout</button>
    </form>
  );
};

export default Logout;
