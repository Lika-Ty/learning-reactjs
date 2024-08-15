import Card from "./Card";
import "./style.css";

const proSource = [
  {
    src: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Nike",
    details: "This is a good product!",
  },
  {
    src: "https://images.pexels.com/photos/4066968/pexels-photo-4066968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.pexels.com/photos/2759783/pexels-photo-2759783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Adidas",
    details: "This is a good product!",
  },
  {
    src: "https://images.pexels.com/photos/7543639/pexels-photo-7543639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Nike",
    details: "This is a good product!",
  },
];

const Product = () => {
  return (
    <div className="card-warpper">
      {proSource
        .filter((filter) => filter.title === "Nike")
        .map(({ src, title, details }) => {
          return <Card src={src} title={title} details={details}/>;
        })}
    </div>
  );
};

export default Product;
