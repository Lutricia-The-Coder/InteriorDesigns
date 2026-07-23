import Navbar from "./Navbar";
import "../index.css";

type Props = {
  onAdd: () => void;
  search: string;
  setSearch: (value: string) => void;
  children: React.ReactNode;
};

export default function Hero({
  onAdd,
  search,
  setSearch,
  children,
}: Props) {
  return (
    <section className="hero">
      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <div className="overlay">
        <div className="dashboard-header">
          <h1>Your Bookmarks</h1>

          <button onClick={onAdd}>
            + Add Bookmark
          </button>
        </div>

        <div className="hero-links">
          {children}
        </div>
      </div>
    </section>
  );
}