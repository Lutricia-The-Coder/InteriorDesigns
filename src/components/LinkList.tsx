import type { LinkItem } from "../types";
import LinkCard from "./LinkCard";
import "../index.css";


type Props = {
  links: LinkItem[];
  onDelete: (id: string) => void;
  onEdit: (link: LinkItem) => void;
  search:string;
};

export default function LinkList({
  links,
  onDelete,
  onEdit,
  search,
}: Props) {
  if (links.length === 0)
    return (
      <div className="empty">

       <h1>
          {search.trim()
            ? "No bookmarks found "
            : "No Bookmarks Yet "}
        </h1>

          <p>
        {search.trim()
          ? "Try another search."
          : 'Click "Add Bookmark" to save your first website.'}
      </p>

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