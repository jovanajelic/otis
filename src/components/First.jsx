import React from 'react';
import './first.css';

const First = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="aboutPanel">
            <h4>
              U našoj je prirodi <br /> da pomognemo
            </h4>
            <p>
              Vaša solidarnost i saosećanje inspirišu nas da radimo još predanije kako bismo ostvarili pozitivne
              promene.
            </p>
            <button className="button">
              <i className="fa-solid fa-chevron-right"></i>
              <span>Više</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default First;
