import React from "react";

const Player = ({ player }) => {
  console.log(player);
  const {
    image,
    name,
    category,
    flag_image,
    batting_style,
    country,
    price,
    rating,
  } = player;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img className="w-full h-[200px] object-cover p-4 rounded-[20px]"
            src={image}
            alt="Player-Image"
          />
        </figure>
        <div className="p-4 space-y-2">
          <h2 className="card-title">{name}</h2>
          <div className="flex justify-between items-center">
           <div className="flex items-center gap-3">
            <span><img className="w-5" src={flag_image} alt="" /></span>
           <span>{country}</span>
           </div>
           <span className="btn">{category} </span>
          </div>
          <div className="flex items-center justify-between font-semibold">
            <span>Rating</span>
            <span>{rating}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Batting Style</span>
            <span>{batting_style}</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-bold">
                <span>$</span>
                <span>{price}</span>
            </div>
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
