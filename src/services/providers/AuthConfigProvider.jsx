import PropTypes from "prop-types";
import * as authConfig from "../../utils/authConfigConstants";
import { AuthConfigContext } from "../context/AuthConfigContext";

AuthConfigProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function AuthConfigProvider({ children }) {
  return (
    <AuthConfigContext.Provider value={authConfig}>
      {children}
    </AuthConfigContext.Provider>
  );
}
