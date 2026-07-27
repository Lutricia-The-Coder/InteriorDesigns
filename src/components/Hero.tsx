
import "../index.css";
import { CgDesignmodo } from "react-icons/cg";
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
   
      <main className="overlay">
        <div className="dashboard-header">
          <h1><CgDesignmodo />InteriorDesigns</h1>


  <div className="header-actions">
    <input
      type="text"
      placeholder="Search bookmarks..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="header-search"
    />
          <button onClick={onAdd}>
             Add Bookmark
          </button>
        </div>
</div>
        <div className="hero-links">
          {children}
        </div>
        
      </main>
    </section>
  );
}