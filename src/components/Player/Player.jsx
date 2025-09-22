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
          <img className="w-full h-[200px] object-cover"
            src={image}
            alt="Player-Image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
