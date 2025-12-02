"use client";

import { useState, useEffect, FormEvent } from "react";
import { ContactsCard } from "../../components/ContactsCard";
import { Contacts } from "../../fakedb";

type Contact = {
  id: number;
  name: string;
  telephone: string;
  address?: string | null;
  category?: string | null;
};

// mit backend reden, klären auf welchem localhost das läuft
const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export default function Home() {
  // Kontakte aus dem Backend holen und in den State speichern
  const [contacts, setContacts] = useState<Contact[]>(Contacts);

  // die vier eingabefelder für den neuen kontakt
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [adress, setAdress] = useState("");
  const [category, setCategory] = useState("");

  // loading zeigt loading zustand an und error speichert fehlernachrichten
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // POST - neuen kontakt erstellen funktion
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch(`${API_BASE}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          telephone,
          address: adress,
          category,
        }),
      });

      if (!res.ok) {
        const message = await res.text();
        throw new Error(message || `Fehler beim Erstellen: ${res.status}`);
      }

      const newContact: Contact = await res.json();

      setContacts((prev) => [...prev, newContact]);

      setName("");
      setTelephone("");
      setAdress("");
      setCategory("");
    } catch (err) {
      console.error(err);

      const message =
        err instanceof Error
          ? err.message
          : "Unbekannter Fehler beim Erstellen";

      setError(message);
    }
  };

  // DELETE - kontakt löschen funktion
  const handleDelete = async (id: number) => {
    setError(null);

    try {
      const res = await fetch(`${API_BASE}/contacts/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error(`Fehler beim Löschen: ${res.status}`);
      }

      setContacts((prev) => prev.filter((contact) => contact.id !== id));
    } catch (err) {
      console.error(err);

      const message =
        err instanceof Error
          ? err.message
          : "Unbekannter Fehler beim Erstellen";

      setError(message);
    }
  };
  
  // GET - kontakte laden beim initialen rendern
  // useEffect(() => {
  //   const loadContacts = async () => {
  //     try {
  //       const res = await fetch(`${API_BASE}/contacts`, {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });

  //       if (!res.ok) {
  //         throw new Error(`Fehler beim Laden: ${res.status}`);
  //       }

  //       const data: Contact[] = await res.json();
  //       setContacts(data);
  //     } catch (err) {
  //       console.error(err);

  //       const message =
  //         err instanceof Error ? err.message : "Unbekannter Fehler beim laden";

  //       setError(message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   loadContacts();
  // }, []);

  // loading und error anzeige
  // if (loading) {
  //   return <main>Kontakte werden geladen...</main>;
  // }

  // if (error) {
  //   return <main>Fehler beim Laden der Kontakte: {error}</main>;
  // }
  
  return (
    <main className="flex justify-center items-center  flex-col">
      {/* FORM ZUM AUSFÜLLEN */}
      <form
        className="border-2 p-6 flex flex-col items-center gap-10 rounded-xl min-w-full "
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl">Create Contact</h1>
        <section className="min-w-full min-h-full flex flex-col gap-10">
          <div className="border-b">
            <input
              type="text"
              placeholder="Name:"
              className="text-2xl"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="border-b">
            <input
              type="text"
              placeholder="Telephone:"
              className="text-2xl"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </div>
          <div className="border-b">
            <input
              type="text"
              placeholder="Address:"
              className="text-2xl"
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
            />
          </div>
          <div className="border-b">
            <input
              type="text"
              placeholder="Category:"
              className="text-2xl"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </section>

        <button
          type="submit"
          className="border-2 pt-1 pb-1 pl-2 pr-2 rounded-xl mt-2 text-2xl"
        >
          Create
        </button>
      </form>
      <section className="border-2 p-6 flex flex-col items-center gap-10 rounded-xl min-w-full ">
        <h2 className="text-3xl">Contacts</h2>
        <div>
          {/* HIER NOCH ONDELETE HINZUGEFÜGT */}
          <ContactsCard contacts={contacts} onDelete={handleDelete} />
        </div>
      </section>
    </main>
  );
}
