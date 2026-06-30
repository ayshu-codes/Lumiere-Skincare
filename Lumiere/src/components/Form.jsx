import "./Form.css";

function Form() {
  return (
    <section className="contact">
      <div className="form-card">
        <h1>Get in Touch</h1>
        <br />
        <p>We'd love to hear from you. Fill out the form below.</p>

        <form>
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Phone Number</label>
          <input type="text" placeholder="Enter your phone number" />

          <label>Message</label>
          <textarea placeholder="Write your message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Form;