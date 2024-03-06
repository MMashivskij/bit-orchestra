import star_1 from "../../assets/star_1.png";
import star_2 from "../../assets/star_2.png";

interface Review {
    id: string;
    body: string;
    productId: number;
    date: string;
    email: string;
    stars: number;
    username: string;
    phone: number;
}

interface ReviewProps {
    review: Review
}


const Review: React.FC<ReviewProps> = ({ review }) => {

    const stars_1 = Array.from({ length: review.stars });
    const stars_2 = Array.from({ length: 5 - review.stars });
    
    return (
        <div style={{ marginBottom: "20px" }}>
            <div style={{ fontSize: "24px" }}>{review.username}</div>
            <div style={{ fontSize: "12px" }}>{review.date}</div>
            <div style={{ display: "flex" }}>
                {
                    stars_1.map(() => (
                        <img src={star_1} width="20"/>
                    )) 
                }
                {
                    stars_2.map(() => (
                        <img src={star_2}  width="20"/>
                    )) 
                }
            </div>
            <div>{review.body}</div>
        </div>
    )
}

export default Review;