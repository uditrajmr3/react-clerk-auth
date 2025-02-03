import { ClerkProvider } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

import AppLayout from "./AppLayout";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) throw new Error("Missing Publishable Key");

function ClerkWrapper() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      navigate={(to) => navigate(to)}
    >
      <AppLayout />
    </ClerkProvider>
  );
}

export default ClerkWrapper;
