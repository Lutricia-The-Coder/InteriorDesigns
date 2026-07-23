import "../index.css";

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

export default function Navbar({
  search,
  setSearch,
}: Props) {
  return (
    <nav className="navbar">

      <h2 className="logo">
        interior
      </h2>

      <div className="search">

        <input
          type="text"
          placeholder="Search bookmarks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

    </nav>
  );
}