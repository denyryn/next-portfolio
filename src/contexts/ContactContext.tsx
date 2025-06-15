"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { StaticContact, staticContactData } from "@/lib/staticContactData";
import { Loading } from "@/components/screens/loading";

type ContactType = StaticContact;

interface ContactContextType {
  contact: ContactType[] | null;
  loading: boolean;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [contact, setContact] = useState<ContactType[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setContact(staticContactData);
    setLoading(false);

    return;
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <ContactContext.Provider value={{ contact, loading }}>
      {children}
    </ContactContext.Provider>
  );
};

export function useContactContext() {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContactContext must be used within a ContactProvider");
  }
  return context;
}
