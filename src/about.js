import "./CSSs/about.css";

export default function About(){
    const content = document.getElementById("content");
    content.innerHTML = `
     <div class="about-container">
    <div class="about-header">
      <h1>About Us</h1>
      <h3>Serving Exceptional Cuisine Since 1995</h3>
    </div>
    
    <div class="about-content">
      <div class="about-left">
        <section class="about-story">
          <h2>Our Story</h2>
          <p>
            Founded in the heart of Paris, our restaurant has been serving authentic cuisine for over 25 years. Our commitment to quality ingredients and exceptional service has made us a beloved destination for locals and tourists alike. 
            Our team of passionate chefs crafts each dish with care, blending traditional techniques with modern innovation.
          </p>
        </section>
        
        <section class="about-hours">
          <h2>Operating Hours</h2>
          <div class="hours">
            <div class="hours-item">
              <h3>Monday - Thursday</h3>
              <p>11:00 AM - 10:00 PM</p>
            </div>
            <div class="hours-item">
              <h3>Friday - Saturday</h3>
              <p>11:00 AM - 11:00 PM</p>
            </div>
            <div class="hours-item">
              <h3>Sunday</h3>
              <p>12:00 PM - 9:00 PM</p>
            </div>
          </div>
        </section>
      </div>
      
      <div class="about-right">
        <section class="about-contact">
          <h2>Contact Information</h2>
          <p><span class="icon phone"></span> +33 9 07 45 12 65</p>
          <p><span class="icon phone"></span> +33 9 07 45 12 65</p>
          <p><span class="icon phone"></span> +33 9 07 45 12 65</p>
        </section>
  
        <section class="about-follow">
          <h2>Follow Us</h2>
          <div class="social-icons">
            <div class="icon facebook"></div>
            <div class="icon twitter"></div>
            <div class="icon instagram"></div>
            <div class="icon youtube"></div>
          </div>
        </section>
      </div>
    </div>
  </div>
    `;
}