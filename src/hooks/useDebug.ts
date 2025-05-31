import { useEffect } from "react";

type ConsoleMethod =
  | "log"
  | "warn"
  | "error"
  | "info"
  | "debug"
  | "table"
  | "group"
  | "groupEnd";

/**
 * A hook to conditionally log debug messages only in development.
 * @param method - The console method to use (default: 'log').
 * @returns A function that logs messages only in development.
 */
export function useDebug(method: ConsoleMethod = "log") {
  // Only allow logging in development
  const isDev = process.env.NODE_ENV === "development";

  // Return a logging function that respects the environment
  const debug = (...args: any[]) => {
    if (!isDev) return; // Skip in production
    console[method](...args);
  };

  // Optional: Clean up logs when component unmounts (for `group`/`groupEnd`)
  useEffect(() => {
    return () => {
      if (method === "group" && isDev) {
        console.groupEnd();
      }
    };
  }, [method, isDev]);

  return debug;
}
