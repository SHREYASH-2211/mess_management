import React from "react";
import styled from "styled-components";
import logo1 from "../assets/FoodYummy.png"; // Ensure the correct path
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

export default function Footer() {
  return (
    <div className="footer">
      <Section>
        <div className="brand container">
          {/* Image with a dark background to check transparency */}
          <img src={logo1}alt="Logo"/>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
            repudiandae.
          </p>
          <ul>
            <li><AiFillInstagram /></li>
            <li><FaFacebookF /></li>
            <li><GrLinkedinOption /></li>
            <li><BsTwitter /></li>
          </ul>
        </div>
        <div className="about container">
          <div className="title"><h3>About Us</h3></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            eligendi repellat laudantium blanditiis iure nulla, ut aliquam
            itaque unde nesciunt cum veritatis perferendis vel expedita! Nam
          </p>
        </div>
        <div className="contact container">
          <div className="title"><h3>Contact Us</h3></div>
          <p>+91 1231231231</p>
          <p>messmate@gmail.com</p>
          <p>@MessMate</p>
          <p>412 Street, Ground Floor, India</p>
        </div>
      </Section>
      <LowerFooter>
        <h2>Copyright &copy; 2025 <span>Mess Mate</span></h2>
      </LowerFooter>
    </div>
  );
}

// Styling
const Section = styled.footer`
  margin: 0;
  background: linear-gradient(to right, #fc4958, #e85d04);
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10vw;
  padding: 4vw;
  
  p {
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
  }
  
  ul {
    display: flex;
    list-style-type: none;
    gap: 4vw;
    margin-top: 2vw;
    
    li {
      padding: 0.8rem;
      border-radius: 2rem;
      background-color: white;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      
      &:hover {
        background-color: black;
        svg {
          transform: scale(1.2);
        }
      }
      
      svg {
        color: #fc4958;
        font-size: 1.6rem;
        transition: 0.3s ease-in-out;
      }
    }
  }

  img {
    width: 150px; // Set explicit width
    height: auto; // Maintain aspect ratio
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h3 {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;

    .container img {
      height: 4rem;
      width: 10rem;
    }
  }
`;

const LowerFooter = styled.div`
  text-align: center;
  background-color: black;
  color: white;
  padding: 1rem;

  h2 {
    span {
      color: #fc4958;
      text-transform: uppercase;
    }
  }
`;

