import type { LinkItem } from "../types";
import LinkCard from "./LinkCard";
import "../index.css";
import emptyImage from "../assets/empty-bookmarks.png";

type Props = {
  links: LinkItem[];
  onDelete: (id: string) => void;
  onEdit: (link: LinkItem) => void;
  onAdd:() => void;
  search:string;
};

export default function LinkList({
  links,
  onDelete,
  onEdit,
  onAdd,
  search,
}: Props) {
  if (links.length === 0)
    return (
      <div className="empty">


 <img
        src={emptyImage}
        alt="No bookmarks"
        className="empty-image"
      />
       <h1>
          {search.trim()
            ? "No bookmarks found "
            : "Welcome to Your Bookmark Vault "}
        </h1>

          <p>
        {search.trim()
          ? "Try another search."
          : 'Save your favorite interior design websites,ideas, and inspiration in one organized place.'
          }
      </p>
 <button
    className="empty-btn"
    onClick={onAdd}
  >
    + Add Your First Bookmark
  </button>
      </div>
    );

  return (
    <section className="list">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          link={link}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </section>
  );
}