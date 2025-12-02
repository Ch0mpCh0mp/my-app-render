"use client";

type Contact = {
  id: number;
  name: string;
  telephone: string;
  address?: string | null;
  category?: string | null;
};

type ContactsCardProps = {
  contacts: Contact[];
  // delete funktion als prop übergeben,hab das optionale weg gemacht
  onDelete: (id: number) => void;
};

// const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

// hier noch delete einbaut
export const ContactsCard = ({ contacts, onDelete }: ContactsCardProps) => {
  // das selbe map von gestern benutzen
  return (
    <div>
      <section className="cards flex flex-wrap gap-10 ">
        {/* WENN NOCH KEINE KONTAKTE VORHANDEN DANN */}
        {contacts.length === 0 ? (
          <p className="text-xl opacity-70">Noch keine Kontakte vorhanden</p>
        ) : (
          <>
            {contacts.map((c) => (
              <article
                key={c.id}
                className="card border-2 p-6 items-center gap-10 rounded-xl w-30"
              >
                <h2>{c.name}</h2>
                {/* TELEFON KLICKBAR MACHEN */}
                <a href={`tel:${c.telephone}`}>{c.telephone}</a>
                {c.address && <p>{c.address}</p>}
                {c.category && <p>{c.category}</p>}
                {/* DELETE BUTTON */}
                <button
                  className="border-2 pt-1 pb-1 pl-2 pr-2 rounded-xl mt-2"
                  onClick={() => onDelete(c.id)}
                >
                  Delete
                </button>
              </article>
            ))}
          </>
        )}
      </section>
    </div>
  );
};
