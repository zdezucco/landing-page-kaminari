
import Like from "../assets/like.svg";
import Deslike from "../assets/deslike.svg";
import "../styles/areadofa.css";

interface ITestimonialCardProps {
    testemunho: string;
    imgUrl: string;
    rating?: boolean;
    name: string;
    cargo: string;
}

export default function TestimonialCard(props: ITestimonialCardProps) {
    return (
        <div className="carousel-card">
            <img src={props.imgUrl} alt="Ayrton Senna" />
            <span className="testimony">
                <p>{props.testemunho}</p>
            </span>
            <span className="rating">
                {props.rating  ?
                    <img src={Like} alt="Like"/>
                    :
                    <img src={Deslike} alt="Deslike"/>
                }
            </span>
            <span className="names">
                <p>{props.name}</p>
                <p>{props.cargo}</p>
            </span>
        </div>
    )
}