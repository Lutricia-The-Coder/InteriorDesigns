import { useEffect, useState } from "react";
import type { LinkItem } from "../types";
import "../index.css";

type Props = {
  onSave: (link: LinkItem) => void;
  editing: LinkItem | null;
  close: () => void;
};

export default function LinkForm({
  onSave,
  editing,
  close,
}: Props) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    if (editing) {
      setTitle(editing.title);
      setUrl(editing.url);
      setDescription(editing.description);
      setTags(editing.tags.join(", "));
    }
  }, [editing]);

  const submit = (e: React.FormEvent) => {
  e.preventDefault();

  try {
    new URL(url);
  } catch {
    alert("Please enter a valid URL");
    return;
  }

  onSave({
    id: editing?.id ?? crypto.randomUUID(),
    title,
    url,
    description,
    tags: tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
  });

  setTitle("");
  setUrl("");
  setDescription("");
  setTags("");
};

  return (
    <div className="modal">

      <form className="glass" onSubmit={submit}>

        <h2>
          {editing ? "Edit Bookmark" : "Add Bookmark"}
        </h2>

        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <div className="buttons">

          <button type="submit">
            Save
          </button>

          <button
            type="button"
            onClick={close}
          >
            Cancel
          </button>

        </div>

      </form>

    </div>
  );
}