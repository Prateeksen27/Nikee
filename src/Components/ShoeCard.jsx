import React from "react";

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer transition duration-300 ease-in-out max-sm:flex-1 hover:border-coral-red`}
    >
        <div className="flex justify-center items-center sm:w-40 sm:h-40 rounded-xl bg-cover bg-coral-red bg-center bg-hero">
        <img src={imgURL.thumbnail}  height={127} width={103} alt="Shoe" className="object-contain" />
        </div>
     
    </div>
  );
};

export default ShoeCard;
