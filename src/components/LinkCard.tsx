import type { LinkItem } from "../types";
import "../index.css";
import {
  FaTrash,
  FaEdit,
  FaExternalLinkAlt,
} from "react-icons/fa";


type Props = {
  link: LinkItem;
  onDelete: (id: string) => void;
  onEdit: (link: LinkItem) => void;
};

export default function Footer({
  link,
  onDelete,
  onEdit,
}: Props) {
  return (
    <div className="card">

      <h2>{link.title}</h2>

      <a
        href={link.url}
        target="_blank"
        rel="noreferrer"
      >
        {link.url}
      </a>

      <p>{link.description}</p>

      <div className="tags">
        {link.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <div className="actions">

        <button onClick={() => onEdit(link)}>
          <FaEdit />
        </button>

        <button
          onClick={() => window.open(link.url)}
        >
          <FaExternalLinkAlt />
        </button>

        <button
          onClick={() => onDelete(link.id)}
        >
          <FaTrash />
        </button>

      </div>
    </div>
  );
}