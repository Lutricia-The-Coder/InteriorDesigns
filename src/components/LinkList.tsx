import type { LinkItem } from "../types";
import LinkCard from "./LinkCard";
import "../index.css";
type Props = {
  links: LinkItem[];
  onDelete: (id: string) => void;
  onEdit: (link: LinkItem) => void;
};

export default function LinkList({
  links,
  onDelete,
  onEdit,
}: Props) {
  if (links.length === 0)
    return (
      <div className="empty">

        <h1>No Saved Links Yet</h1>

        <p>
          Click "Add Link" to save your first link.
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