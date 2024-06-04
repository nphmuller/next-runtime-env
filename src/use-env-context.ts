"use client";

import { useContext, createContext } from "react";

export const EnvContext = createContext(null);

/**
 * Returns the environment variables from the context.
 *
 * Usage:
 * ```ts
 * const { NODE_ENV, API_URL } = useEnvContext();
 * ```
 */
export const useEnvContext = () => {
  const context = useContext(EnvContext);

  if (!context) {
    throw new Error(
      "useEnvContext must be used within a EnvProvider or PublicEnvProvider"
    );
  }

  return context;
};
