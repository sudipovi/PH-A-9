import React from "react";

const Expert = () => {
  return (
    <div>
      <p className="text-3xl text-green-800 font-bold text-center mb-6">
        Meet Our Green Expert
      </p>
      <div>
        <div className="md:flex justify-center-safe gap-9 flex-col md:flex-row items-center">
          <div className="card bg-base-100 w-80 h-100 shadow-sm">
            <figure className="w-full">
              <img src="https://i.ibb.co.com/NdyKj0Bt/exp1.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Rishi</h2>
              <p>
                Urban houseplants, sustainability, turning indoor greenery into
                lifestyle — he’s grown over 1,000 houseplants and combines
                ecology with décor.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 w-80 h-100 shadow-sm">
            <figure className="w-full">
              <img
                src="https://i.ibb.co.com/B5g8Wtqs/83e9bc8e857f4ad601d7ea963308abaa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Bhole</h2>
              <p>
                Plant styling + care—he merges interior design with houseplant
                expertise, guiding both how to care for and how to display
                greenery.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 w-80 h-100 shadow-sm">
            <figure className="w-full">
              <img
                src="https://i.ibb.co.com/Xrg44Vvq/3c2badd0b9688bcb810ef699afc3f7c1.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Rishi</h2>
              <p>
                Broad horticulture & indoor gardening in the UK context — a
                veteran gardening expert and TV presenter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;
