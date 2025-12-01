"use client";

import { FormEvent, useEffect, useState } from "react";
import Contacts from "../fakedb";

type Contact = {
  id: number;
  name: string;
  telephone: string;
  address?: string | null;
  category?: string | null;
};
type ContactsCardProps = {
  contacts: Contact[];
};
const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export const ContactsCard = ({ contacts }: ContactsCardProps) => {
//   const [contactCards, setContactCards] = useState<Contact[]>([]);
//   const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch(`${API_BASE}/contacts`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const message = await res.text();
        throw new Error(message || `Fehler beim Erstellen: ${res.status}`);
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message ?? "Unbekannter Fehler beim Erstellen");
    }
  };
  //=============== Später wieder aktivieren wenn man mit echter db arbeitet =================
  //   useEffect(() => {
  //     async function loadContactCards() {
  //       try {
  //         const res = await fetch(`${API_BASE}/contacts`);

  //         if (!res.ok) {
  //           throw new Error(`Fehler beim Laden: ${res.status}`);
  //         }

  //         const data: Contact[] = await res.json();
  //         setContactCards(data);
  //       } catch (err: any) {
  //         setError(err.message ?? "Unbekannter Fehler");
  //       } finally {
  //         setLoading(false);
  //       }
  //     }

  //     loadContactCards();
  //   }, []);

  //   if (loading) {
  //     return <main>Kontakte werden geladen...</main>;
  //   }

  //   if (error) {
  //     return <main>Fehler beim Laden der Kontakte: {error}</main>;
  //   }
  return (
    <div>
      <section className="cards flex flex-wrap gap-10 ">
        {Contacts.map((c) => (
          <article
            key={c.id}
            className="card border-2 p-6 items-center gap-10 rounded-xl w-30"
          >
            <h2>{c.name}</h2>
            <p>{c.telephone}</p>
            {c.address && <p>{c.address}</p>}
            {c.category && <p>{c.category}</p>}
            <button className="border-2 pt-1 pb-1 pl-2 pr-2 rounded-xl mt-2">
              Delete
            </button>
          </article>
        ))}
      </section>
    </div>
  );
};
