import type { LinkItem } from "../types";
import "../index.css";
import { FaRegTrashAlt , FaEdit,  FaExternalLinkAlt,} from "react-icons/fa";
import { useState } from "react";

type Props = {
  link: LinkItem;
  onDelete: (id: string) => void;
  onEdit: (link: LinkItem) => void;
};

export default function LinkCard({
  link,
  onDelete,
  onEdit,
}: Props) {
const [expanded, setExpanded] = useState(false);
  return (
<div className="card">

  <h2>{link.title}</h2>

  
  <a href={link.url} target="_blank" rel="noreferrer">
    {link.url}
  </a>

  
  <p
  className={`description ${expanded ? "expanded" : ""}`}
  onClick={() => setExpanded(!expanded)}

  title={expanded ? "Click to collapse" : "Click to read more"}
>
  {link.description}
</p>

  <div className="tags">
    {link.tags.map((tag) => (
      <span key={tag}>{tag}</span>
    ))}
  </div>

      <div className="actions">
        <button onClick={() => onEdit(link)} style={{ background: "none" , color:"gray" }}>
          <FaEdit />
        </button>

        <button
          onClick={() => window.open(link.url)}  style={{ background: "none" , color:"gray" }}
        >
          <FaExternalLinkAlt /> 
        </button>

        <button 
          onClick={() => onDelete(link.id)}  style={{ background: "none" , color:"gray" }}
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
}