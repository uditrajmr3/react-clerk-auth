import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";

import useAuthConfig from "../../services/hooks/useAuthConfig";

function AppLayout() {
  const { withSignUp, fallbackRedirectUrl, forceRedirectUrl } = useAuthConfig();

  return (
    <div>
      <header className="flex items-center justify-center py-8 px-4">
        <SignedOut>
          <SignInButton
            forceRedirectUrl={forceRedirectUrl}
            fallbackRedirectUrl={fallbackRedirectUrl}
            withSignUp={withSignUp}
          />
          {/* FIXME: Replace signinbutton with custom button with navigation to /login */}
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>

      <div className="flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
