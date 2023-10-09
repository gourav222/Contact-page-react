import "./Body.css";
import EarthCanvas from "./Earth";
const Body = () => {
  return (
    <div className="body">
      <div className="description">
        <h1>Any Query..? Write us</h1>
        <span>
          We're here to help and answer any question you might have. We look
          forward to hearing from you.
        </span>
      </div>

      <div className="contact">
        <div className="contact-form">
          <div className="name-email">
            <input type="text" className="input-field" placeholder="Your Name" />

            <input type="email" className="input-field" placeholder="Your Email" />
          </div>

          <div className="phone-sub">
            <input
              type="number"
              className="input-field"
              placeholder="Phone Number"
            />
            <input type="text" className="input-field" placeholder="Your Subject" />
          </div>

          <div className="textarea">
            <textarea
              name=""
              id=""
              rows="7"
              cols="38"
              placeholder="Your Message"
            ></textarea>
          </div>

          <div>
            <button className="submit">Submit</button>
          </div> 
        </div>

        <div className="map">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.6766369904067!2d75.8048788749732!3d26.913755760046552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6a9fbd5534f%3A0x776803fe8fa7422c!2sKJ%20City%20Tower!5e0!3m2!1sen!2sin!4v1696703069482!5m2!1sen!2sin"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
            {/* <EarthCanvas/> */}
          
        </div>

        
      </div>

      <div className="social-media">
        <div>
          <img src="Assets/what.png" alt="" />
          <h1>WhatsApp Support:</h1>
          <span>(Coming Soon)</span>
        </div>
        <div>
          <img src="Assets/mail.png" alt="" />
          <h1>Email Support:</h1>
          <span>support@aeronpay.in</span>
        </div>
        <div>
          <img src="Assets/mapp.png" alt="" />
          <h1>Address:</h1>

          <span>Ashok Marg, C Scheme, Jaipur</span>
        </div>
      </div>



    </div>
  );
};
export default Body;
