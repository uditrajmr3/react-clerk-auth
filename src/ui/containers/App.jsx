import { RouterProvider } from "react-router-dom";
import useAuthConfig from "../../services/hooks/useAuthConfig";
import AuthConfigProvider from "../../services/providers/AuthConfigProvider";
import { createAppRouter } from "./router";

function App() {
  const authConfig = useAuthConfig();
  const router = createAppRouter(authConfig);

  return (
    <AuthConfigProvider>
      <RouterProvider router={router} />
    </AuthConfigProvider>
  );
}

export default App;
