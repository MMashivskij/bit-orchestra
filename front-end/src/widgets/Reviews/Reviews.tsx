import { useEffect, useState } from "react";
import Review from "./Review";
import AddReview from "./AddReview";

const style = {
    backgroundColor: 'lightgrey',
    padding: '30px'
}

interface ReviewData {
    id: string;
    body: string;
    productId: number;
    date: string;
    email: string;
    stars: number;
    username: string;
    phone: number;
}


const Reviews = () => {
    const [reviews, setReviews] = useState<ReviewData[] | null>(null);

    useEffect(() => {
        fetch("http://localhost:3000/reviews").then((res) => res.json())
        .then(json => {
            setReviews(json);
        })
    }, []);

    return (
        <main style={style}>
            {
                reviews ? reviews.map(review => (
                    <Review review={review} />
                )) :
                "There is no review"
            }
            <hr style={{ borderTop: '1px solid black', marginBottom: ' 40px' }} />
            <section>
                <h1 style={{ fontSize: '30px', }}><b>Leave a Review</b></h1>
                <div style={{ marginBottom: '20px' }}>Your emial address will not be published. Requered fields are marked *</div>
                <AddReview />
            </section>
        </main>
    )
}

export default Reviews;