import Navbar from "./Navbar";
import "../index.css";

type Props = {
  onAdd: () => void;
  search: string;
  setSearch: (value: string) => void;
  hasBookmarks: boolean;
  children: React.ReactNode;
};

export default function Hero({
  onAdd,
  search,
  setSearch,
  hasBookmarks,
  children,
}: Props) {
  return (
    <section className="hero">
      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <div className="overlay">

        {hasBookmarks ? (
          <>
            <div className="dashboard-header">
              <h1>Your Bookmarks</h1>

              <button onClick={onAdd}>
                + Add Bookmark
              </button>
            </div>

            <div className="hero-links">
              {children}
            </div>
          </>
        ) : (
          <>
  <div className="empty-state">

    <h1>No Bookmarks Yet</h1>

    <p>
      Start building your personal interior bookmark collection.
    </p>

    <button onClick={onAdd}>
      + Add Your First Bookmark
    </button>

  </div>
</>
        )}

      </div>
    </section>
  );
}