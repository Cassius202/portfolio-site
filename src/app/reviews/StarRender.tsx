import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

//npm i react-icons --save
const Rounder = (number: number, i:number = 1):number => {
  const multiplier:number = 1 / i;

  const workVal = number * multiplier;
  return Math.round(workVal) * i;
};

const StarRender = ({rating, colored} : {rating: number, colored: boolean}) => {
  const iconColor : string = colored ? "text-amber-500" : 'text-inherit'
  const starNum = Number(rating);
  const starExtra = Rounder(starNum , 0.5) - Math.floor(starNum)
  return (
    <div className="flex gap-1">
    {
    [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map(
      (value, index) => {
        if (Number(starNum) >= value && index % 2 === 1) {
          return (
            <FaStar
              key={index}
              size={15}
              className={iconColor}
            />
          );
        }
      }
    )
  }
  {
    starExtra === 0.5 ? (
      <FaStarHalfAlt size={15} className={iconColor} />
    ) : starExtra === 1 ? (
      <FaStar size={15} className={iconColor} />
    ) : null
  }
  </div>
  )
}

export default StarRender;