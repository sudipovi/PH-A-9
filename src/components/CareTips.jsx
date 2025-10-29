import React from "react";

const CareTips = () => {
  return (
    <div>
      <h1 className="text-3xl text-green-800 font-bold text-center mb-6">
        Care Tips
      </h1>
      <div className="md:flex md:justify-center-safe md:items-center md:gap-6 flex-col md:flex-row">
        <figure>
          <img
            src="https://i.ibb.co.com/dszGcKJL/1841b6497251b18a103da7ab032628c9.jpg"
            alt=""
            width={"250px"}
          />
        </figure>
        <div className=" md:w-96 w-69">
          <p>
            Taking care of indoor plants is simple when you follow a few basic
            tips. Always place your plants where they can get enough natural
            light, but avoid direct harsh sunlight. Water them only when the top
            layer of soil feels dry to prevent overwatering. Clean the leaves
            regularly to help them breathe better, and rotate the pots every few
            weeks so all sides get light evenly. Lastly, choose the right pot
            with good drainage — your plants will stay healthy and grow
            beautifully! 🌿
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareTips;
