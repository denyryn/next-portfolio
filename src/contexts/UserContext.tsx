"use client";

import { createContext, useContext, ReactNode } from "react";
import { useQuery } from "react-query";
import { Loading } from "@/components/screens/loading";

type Tech = {
  name: string;
  icon: string;
};

type Contact = {
  href: string;
  label: string;
  icon: string;
};

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  techs?: Tech[];
  contacts?: Contact[];
  portrait: string;
};

interface UserContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

const fetchUser = async (): Promise<User> => {
  const API_URL = process.env["NEXT_PUBLIC_BIN_API_URL"];
  const MASTER_KEY = process.env["NEXT_PUBLIC_BIN_X_MASTER_KEY"];

  if (!API_URL || !MASTER_KEY) {
    throw new Error("Missing API credentials");
  }

  const response = await fetch(API_URL + "/b/683eee968a456b7966a8fd5a", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Master-Key": MASTER_KEY,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  const data = await response.json();
  return data.record;
};

export function UserProvider({ children }: UserProviderProps) {
  const { data, isLoading, error } = useQuery<User, Error>("user", fetchUser, {
    staleTime: 1000 * 60 * 30, // cache for 5 minutes
    retry: 1,
  });

  if (isLoading) return <Loading />;

  return (
    <UserContext.Provider
      value={{
        user: data ?? null,
        isLoading,
        error: error ? error.message : null,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
}
