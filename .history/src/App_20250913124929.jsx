function Book(prop){
  return (
    <div className="catalog_book">
      <img className="book_image" src={prop.image} />
      <div className="book_data">
        <div className="author_name">
          <p>by</p>
          <p>{prop.author}</p>
        </div>
        <a href={prop.link} target="_blank" className="book_link">Learn More</a>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="app_body">
      <div className="header">
        <h1>Book Catalog</h1>
      </div>
      <div className="book_listing">
        <div className="add_new">New</div>
        <Book image="src/assets/book1.png" author="David Nixon" link="https://itbook.store/books/9781484256381" />
        <Book image="src/assets/book2.png" author="Janine Suvak" link="https://itbook.store/books/9781430265863" />
      </div>
      <div className="footer">Hidayat Patil, 2025</div>
    </div>
  );
}

export default App;
