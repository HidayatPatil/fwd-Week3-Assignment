export default function Book({title, subtitle, isbn13, price, image, url}){
  return (
    <div className="catalog_book">
      <img className="book_image" src={image} />
      <div className="book_data">
        <div className="author_name">
          <p>{title}</p>
          <p>{price}</p>
        </div>
        <a href={url} target="_blank" className="book_link" alt={title}>Learn More</a>
      </div>
    </div>
  )
}