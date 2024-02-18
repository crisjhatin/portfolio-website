function Contact() {
  
  return(
    <section id="contact">
      <h3>Get in touch</h3>
      <p className="leading">Please, I'd appreciate if you fill the form in order to get in touch</p>
      <form action="">
        <input type="text" placeholder="NAME"/>
        <input type="email" placeholder="EMAIL"/>
        <textarea placeholder="YOUR MESSAGE"></textarea>
        <button className="button">Send message</button>
      </form>
    </section>
  )
}

export default Contact