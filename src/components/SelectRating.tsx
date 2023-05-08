import star from "../images/icon-star.svg";

interface SelectRatingProps {
    handleRating: (value: number) => void,
    handleSubmit: (rating: number) => void,
    rating: number
}

function SelectRating({handleRating, handleSubmit, rating}: SelectRatingProps) {
    return (
        <>
            <img className="star" src={star} alt="Star"/>
            <div className="card__text">
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated to
                    help
                    us
                    improve our offering!</p>
            </div>
            <div className="buttons">
                {[1, 2, 3, 4, 5].map((value) => (
                    <button key={value} onClick={() => handleRating(value)}
                            className="button__pick">{value}</button>
                ))}
            </div>

            <button onClick={() => handleSubmit(rating)} className="button__submit">Submit</button>
        </>
    );
}

export default SelectRating;