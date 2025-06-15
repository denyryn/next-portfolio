import { useEffect, useState } from "react";

/**
 * A React hook that returns `true` only after the component has mounted on the client.
 * Useful to avoid hydration mismatches or DOM-manipulation-related errors.
 */
export function useHasMounted(): boolean {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
}
