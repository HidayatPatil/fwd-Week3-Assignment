import Book from "./components/Book";
import data from "./data/books.json";

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
        <Book image="assets/book1.png" author="David Nixon" link="https://itbook.store/books/9781484256381" />
        <Book image="assets/book2.png" author="Janine Suvak" link="https://itbook.store/books/9781430265863" />
      </div>
      <div className="footer">Hidayat Patil, 2025</div>
    </div>
  );
}

export default App;
