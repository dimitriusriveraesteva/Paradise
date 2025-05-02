function ContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Have questions or want to book your stay? Reach out to us!</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;