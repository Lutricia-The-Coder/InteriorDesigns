import { useEffect, useMemo, useState } from "react";
import Hero from "./components/Hero";
import LinkForm from "./components/LinkForm";
import LinkList from "./components/LinkList";
import useLocalStorage from "./hooks/useLocalStorage";
import type { LinkItem } from "./types";
import "./index.css";



function App() {
  const [links, setLinks] = useLocalStorage<LinkItem[]>("links", []);
  const [editing, setEditing] = useState<LinkItem | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [showBookmarks, setShowBookmarks] = useState(false);

const saveLink = (link: LinkItem) => {

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

      setShowBookmarks(true);
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
    setShowBookmarks(false);
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
console.log("Search:", search);
console.log("Filtered:", filteredLinks);
  return (
    <>
      <Hero
  onAdd={() => setShowForm(true)}
  search={search}
  setSearch={setSearch}
  onBookmarks={() => setShowBookmarks(true)}
  onHome={() => setShowBookmarks(false)}
/>
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
  <input
        className="bookmark-search"
        type="text"
        placeholder="Search bookmarks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <LinkList
        links={filteredLinks}
        onDelete={deleteLink}
        onEdit={editLink}
         search={search}
      />

    </div>
  </div>
)}
    </>
  );
}

export default App;