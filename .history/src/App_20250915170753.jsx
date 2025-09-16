import Book from "./components/Book";
import data from "/Users/hiday/Code/fwdWeek3Assignment/data/books.json";

function renderProducts(){
  return <Book {...data} />
}

function App() {
  return (
    <div className="app_body">
      <div className="header">
        <h1>Book Catalog</h1>
      </div>
      <div className="book_listing">
        <div className="add_new">New</div>
        <Book.map(renderProducts) />
      </div>
      <div className="footer">Hidayat Patil, 2025</div>
    </div>
  );
}

export default App;
