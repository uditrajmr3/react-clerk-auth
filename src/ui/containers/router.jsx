import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";
import { createBrowserRouter } from "react-router-dom";

import Error from "../components/Error";
import DashBoard from "../pages/DashBoard";
import HomePage from "../pages/HomePage";
import ClerkWrapper from "./ClerkWithRoutes";

export const createAppRouter = ({
  signUpUrl,
  signInUrl,
  withSignUp,
  transferable,
  fallbackRedirectUrl,
  forceRedirectUrl,
}) => {
  return createBrowserRouter([
    {
      element: <ClerkWrapper />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: (
            <SignIn
              forceRedirectUrl={forceRedirectUrl}
              fallbackRedirectUrl={fallbackRedirectUrl}
              signUpUrl={signUpUrl}
              signInUrl={signInUrl}
              withSignUp={withSignUp}
              transferable={transferable}
            />
          ),
        },
        {
          path: "/signup",
          element: (
            <SignUp
              forceRedirectUrl={forceRedirectUrl}
              fallbackRedirectUrl={fallbackRedirectUrl}
              signUpUrl={signUpUrl}
              signInUrl={signInUrl}
              withSignUp={withSignUp}
              transferable={transferable}
            />
          ),
        },
        {
          path: "/dashboard",
          element: (
            <>
              <SignedIn>
                <DashBoard />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          ),
        },
      ],
    },
  ]);
};
