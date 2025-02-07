import React from "react";
import styled from "styled-components";
import Services1 from "../assets/Services1.png";
import Services2 from "../assets/Services2.png";
import Services3 from "../assets/Services3.png";
import { TitleStyles } from "./ReusableStyles";
export default function Services() {
  return (
    <Section id="services">
      <div className="title">
        <h1 className="yellow">What we do?</h1>
        <p>
        At MessMate, we revolutionize the campus dining experience with seamless technology and quality partnerships.
        </p>
      </div>
      <div className="services">
        <div className="service">
          <img src={Services2} alt="" />
          <p>
            
          <b>Smart & Hassle-Free Ordering</b>
          <p>Students and staff can easily browse menus, view "Today's Special," and place orders with real-time payment integration for a smooth dining experience.</p>
          </p>
          <button>Read More</button>
        </div>
        <div className="service yellow">
          <img src={Services1} alt="" />
          <p>
          <b>Quality & Trusted Partnerships</b>
          <p>We collaborate with top brands like Amul Ice Creams, WIBS Bread, and local vegetable vendors to ensure fresh, high-quality ingredients and diverse food options daily.</p>
          </p>
          <button>Read More</button>
        </div>
        <div className="service">
          <img src={Services3} alt="" />
          <p>
          <b>Efficient Mess & Canteen Management</b>
          <p>From meal scheduling to inventory tracking, our platform empowers mess staff with smart tools to optimize operations, minimize waste, and improve service efficiency.</p>
          </p>
          <button>Read More</button>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 2rem 4rem;
  ${TitleStyles};
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    margin-top: 4rem;
    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5vw;
      padding: 0 3vw;
      img {
        height: 2.8rem;
      }
      p {
        text-align: center;
        line-height: 2rem;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 0.6rem 3rem;
        letter-spacing: 0.2rem;
        border-radius: 2rem;
        font-size: 1.1rem;
        border: none;
        color: white;
        background-color: #fc4958;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #f9c74f;
        }
      }
    }
    .yellow {
      button {
        background-color: #f9c74f;
        &:hover {
          background-color: #fc4958;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    margin: 2rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;
