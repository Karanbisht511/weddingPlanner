import "./Tiles.css";
import { useNavigate } from "react-router";

export default function Tiles({ data, title }) {
  const navigate = useNavigate();
  console.log(data);
  const arrayOfData = Object.entries(data.details);
  console.log(arrayOfData);

  return (
    <div className="tile">
      {title && <h2 className="arrangement-head">{title}</h2>}

      <img
        className="tileImage"
        src={`http://localhost:5000/uploads/${data.image.filename}`}
        alt="venue"
      />

      {data &&
        arrayOfData.map(([key, value], index) => {
          if (key === "experience") {
            return (
              <div>
                <span className="attributes"> {key.toUpperCase()}: </span>
                <span className="values">{value} years</span>
              </div>
            );
          } else if (key === "price") {
            return (
              <div>
                <span className="attributes"> {key.toUpperCase()}: </span>
                <span className="values">₹{value}/-</span>
              </div>
            );
          } else if (key !== "__v" && key !== "_id" && key !== "image") {
            return (
              <div>
                <span className="attributes"> {key.toUpperCase()}: </span>
                <span className="values">{value}</span>
              </div>
            );
          }
        })}
    </div>
  );
}
