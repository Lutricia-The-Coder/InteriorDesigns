import { useEffect, useMemo, useState } from "react";
import Hero from "./components/Hero";
import LinkForm from "./components/LinkForm";
import LinkList from "./components/LinkList";
import useLocalStorage from "./hooks/useLocalStorage";
import type { LinkItem } from "./types";
import "./index.css";



function App() {
  const [links, setLinks] = useLocalStorage<LinkItem[]>("links", []);
const [page, setPage] = useState<"home" | "bookmarks">("home");
  const [editing, setEditing] = useState<LinkItem | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [showBookmarks, setShowBookmarks] = useState(false);

const saveLink = (link: LinkItem) => {
  console.log("saveLink called");
  console.log(link);

  const duplicate = links.find(
    (item) =>
      item.url.toLowerCase() === link.url.toLowerCase() &&
      item.id !== link.id
  );

  if (duplicate) {
    alert("This URL already exists.");
    return;
  }

  if (editing) {
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
    if (window.confirm("Delete this bookmark?")) {
      setLinks(links.filter((item) => item.id !== id));
    }
  };

  const editLink = (link: LinkItem) => {
    setEditing(link);
    setShowForm(true);
  };

  const filteredLinks = useMemo(() => {
    const query = search.toLowerCase();

    return links.filter((item) =>
      item.title.toLowerCase().includes(query) ||
      item.url.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.tags.join(" ").toLowerCase().includes(query)
    );
  }, [links, search]);

  return (
    <>
      <Hero
  onAdd={() => setShowForm(true)}
  search={search}
  setSearch={setSearch}
  onBookmarks={() => setShowBookmarks(true)}
  onHome={() => setShowBookmarks(false)}
/>

   {showBookmarks && (
  <div className="modal">
    <div className="bookmarks-modal">

      <div className="modal-header">
        <h2>Saved Links</h2>

        <button
          className="close-btn"
          onClick={() => setShowBookmarks(false)}
        >
          X
        </button>
      </div>

      <LinkList
        links={filteredLinks}
        onDelete={deleteLink}
        onEdit={editLink}
      />

    </div>
  </div>
)}
    </>
  );
}

export default App;