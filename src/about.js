import "./CSSs/about.css";
import phoneIcon from '../assets/phone-call_455705.png';

export default function About(){
    const content = document.getElementById("content");
    content.innerHTML = `
     <div class="about-about">
     <div class="about-head">
  <h1>About Us</h1>
    <h3>Serving exceptional cuisine since 1995</h3>
  </div>
  
  <div class="about-main">
    <div class="about-left">
      <h2 class="about-h2">Our Story</h2>
      <div class="about-yellow"></div>
      <p>Founded in the heart of Paris, our restaurant has been serving authentic cuisine for over 25 years. Our commitment to quality ingredients and exceptional service has made us a beloved destination for locals and tourists alike.

Our team of passionate chefs crafts each dish with care, blending traditional techniques with modern innovation.</p>
      <h2 class="about-h2">Hours</h2>
      <div class="about-yellow"></div>
      
      <div class="about-hours-container">
        <h3>Monday - Thursday</h3>
        <p>11:00 AM - 10:00 PM</p>
      </div>
      <div class="about-hours-container">
        <h3>Monday - Thursday</h3>
        <p>11:00 AM - 10:00 PM</p>
      </div>
      <div class="about-hours-container">
        <h3>Monday - Thursday</h3>
        <p>11:00 AM - 10:00 PM</p>
      </div>
      
      
      
    </div>
    <div class="about-right">
    <h2 class="about-h2">Contact info</h2>
      <div class="about-yellow"></div>
      <div class="about-information">
      <img src="${phoneIcon}" alt="icon" />
      <p>+33 9 07 45 12 65</p>
      </div>
      <div class="about-information">
      <img src="${phoneIcon}" alt="icon" />
      <p>+33 9 07 45 12 65</p>
      </div>
      <div class="about-information">
      <img src="${phoneIcon}" alt="icon" />
      <p>+33 9 07 45 12 65</p>
      </div>
      <h2 class="about-h2">Follow us</h2>
      <div class="about-icon-container">
      <div class="about-icon-containers"><img src="${phoneIcon}" alt="icon" /></div>
        <div class="about-icon-containers"><img src="${phoneIcon}" alt="icon" /></div>
        <div class="about-icon-containers"><img src="${phoneIcon}" alt="icon" /></div>
        <div class="about-icon-containers"><img src="${phoneIcon}" alt="icon" /></div>
      
      </div>
      
    </div>
  </div>
     </div>
    `;
}