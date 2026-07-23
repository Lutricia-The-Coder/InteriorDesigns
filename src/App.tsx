import { useMemo, useState } from "react";
import Hero from "./components/Hero";
import LinkForm from "./components/LinkForm";
import LinkList from "./components/LinkList";
import useLocalStorage from "./hooks/useLocalStorage";
import type { LinkItem } from "./types";
import "./index.css";
import Confirmation from "./components/Confirmation";

function App() {
  
  const [links, setLinks] = useLocalStorage<LinkItem[]>("links", []);
  const [editing, setEditing] = useState<LinkItem | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
 
  //adding confirmation to the buttons
  const [confirmation, setConfirmation] = useState<{
  message: string;
  type: "success" | "error";
} | null>(null);

const showConfirmation = (
  message: string,
  type: "success" | "error"
) => {
  setConfirmation({ message, type });

  setTimeout(() => {
    setConfirmation(null);
  }, 3000);
};

  const saveLink = (link: LinkItem) => {
   showConfirmation("Bookmark saved successfully!", "success");
    const duplicate = links.find(
      (item) =>
        item.url.toLowerCase() === link.url.toLowerCase() &&
        item.id !== link.id
    );

    if (duplicate) {
     showConfirmation("Bookmark already exists.", "error");
      return;
    }

    if (editing) {
      showConfirmation("Bookmark updated successfully!", "success");
      setLinks(
        links.map((item) =>
          item.id === editing.id ? link : item
        )
      );
      setEditing(null);
    } else {
      setLinks([link, ...links]);
    }

    setShowForm(false);
  };

  const deleteLink = (id: string) => {
    if (window.confirm("Delete bookmark?")) {
      setLinks(links.filter((item) => item.id !== id));
      showConfirmation("Bookmark deleted.", "success");
    }
  };

  const editLink = (link: LinkItem) => {
    setEditing(link);
    setShowForm(true);
  };

  const filteredLinks = useMemo(() => {
    const q = search.toLowerCase();

    return links.filter((item) =>
      item.title.toLowerCase().includes(q) ||
      item.url.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.tags.join(" ").toLowerCase().includes(q)
    );
  }, [links, search]);

  return (
    <>
      <Hero
        onAdd={() => setShowForm(true)}
        search={search}
        setSearch={setSearch}
        
      >
        <LinkList
          links={filteredLinks}
          onDelete={deleteLink}
          onEdit={editLink}
          search={search}
        />
      </Hero>

      {showForm && (
        <LinkForm
          onSave={saveLink}
          editing={editing}
          close={() => {
            setEditing(null);
            setShowForm(false);
          }}
        />
      )}

      {confirmation && (
  <Confirmation
    message={confirmation.message}
    type={confirmation.type}
  />
)}
    </>
  );
}

export default App;