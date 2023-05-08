import './styles/style.css'
import {useState} from "react";
import SelectRating from "./components/SelectRating";
import image from "./images/illustration-thank-you.svg";

function App() {
    const [rating, setRating] = useState<number>(0)
    const [submitted, setSubmitted] = useState<boolean>(false)

    function handleRating(value: number): void {
        setRating(value)
    }

    function handleSubmit(rating: number): void {
        rating !== 0 && setSubmitted(true)
    }

    return (
        <>
            <div className="card">
                {!submitted && <SelectRating handleRating={handleRating} handleSubmit={handleSubmit} rating={rating} />}
                {submitted && (
                    <div className="end">
                        <img src={image} alt=""/>
                        <p className="end__message">You selected {rating} out of 5</p>
                        <h1>Thank you!</h1>
                        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't
                            hesitate to get in touch!</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default App
