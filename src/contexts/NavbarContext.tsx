"use client";
import { createContext, useContext, useState } from "react";

type NavbarContextType = {
  isNavbarVisible: boolean;
  setIsNavbarVisible: (visible: boolean) => void;
};

const NavbarContext = createContext<NavbarContextType>({
  isNavbarVisible: true,
  setIsNavbarVisible: () => {},
});

export function NavbarProvider({ children }: { children: React.ReactNode }) {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  return (
    <NavbarContext.Provider value={{ isNavbarVisible, setIsNavbarVisible }}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbarContext() {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbarContext must be used within a ProjectProvider");
  }
  return context;
}
