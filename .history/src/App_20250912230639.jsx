function Book(prop){
  return (
    <div>
      <img src="" />
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
        <Book author="Hyde" link="google.com" />
      </div>
      <div className="footer">Hidayat Patil, 2025</div>
    </div>
  );
}

export default App;
