type Book = {
  bookId: string;
  title: string;
  author: string;
  rating: number;
  review: string;
  coverImage: string;
  startDate: string;
  endDate: string;
  genre: string;
  publishedYear: number;
};

type BookModalProps = {
  book: Book;
  onClose: () => void;
};

function BookModal({ book, onClose }: BookModalProps) {
  return (
    <div className="modal-overlay">
      <div className="book-modal">
        <button onClick={onClose} className="X-button">
          X
        </button>

        <img
          src={`https://aseye-book-covers-2026.s3.us-east-1.amazonaws.com/${book.coverImage}`}
          alt={book.title}
          className="modalBookCover"
        />

        <h2>{book.title}</h2>

        <h3>{book.author}</h3>

        <p>Genre: {book.genre}</p>

        <p>Published: {book.publishedYear}</p>

        <p>
          Read: {book.startDate} — {book.endDate}
        </p>

        <p>
          Rating:{" "}
          {Array.from({ length: Math.floor(book.rating) }).map((_, index) => (
            <img
              key={index}
              src="/yellow-star.png"
              alt="star"
              className="star"
            />
          ))}
          {book.rating % 1 === 0.5 && (
            <img src="/half-star.png" alt="half star" className="star" />
          )}
          {book.rating} / 5
        </p>

        <p>{book.review}</p>
      </div>
    </div>
  );
}

export default BookModal;
