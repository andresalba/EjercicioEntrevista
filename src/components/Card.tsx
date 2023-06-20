import "./Card.css";

interface Product {
    id: number;
    title: string;
    images: string[];
    price: string;
    variants: Variant[];
  }
  
  interface Variant {
    title: string;
    quantity: number;
  }

interface CardProps {
    answer: Product[];
}

const Card: React.FC<CardProps> = ({ answer }) => {
    return (
        <div>
            {answer.map((item) => (
                <div key={item.id} className="card">
                    <div className="info-main">
                        <h2>{item.title}</h2>
                        <img className="picture" src={item.images[0]} alt="img" />
                        <p className="price">Price: ${item.price}</p>
                    </div>
                    <div className="info-variant">
                        <h3>Variants</h3>
                        {item.variants.map((vari, index) => (
                            <p key={index}>
                                {vari.title}: {vari.quantity}
                            </p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;