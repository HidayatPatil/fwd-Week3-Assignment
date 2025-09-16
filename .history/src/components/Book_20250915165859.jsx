export default function Book({title, subtitle, isbn13, price, image, url}){
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