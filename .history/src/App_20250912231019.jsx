function Book(prop){
  return (
    <div>
      <img src={prop.image} />
      <div>
        <div className="author_name">
          <p>by</p>
          <p>{prop.author}</p>
        </div>
        <a href={prop.link} className="book_link">Learn More</a>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <div className="header">
        <h1>Book Catalog</h1>
      </div>
      <div className="book_listing">
        <Book image="src/assets/book1.png" author="David Nixon" link="https://itbook.store/books/9781484256381" />
      </div>
      <div className="footer">Hidayat Patil, 2025</div>
    </div>
  );
}

export default App;
