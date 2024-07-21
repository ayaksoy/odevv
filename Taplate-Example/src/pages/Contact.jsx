import React from 'react'

export default function Contact() {
  return (
	<div className="container">

	<div className="row container-alt">
	  <div className="col-md-6">
		<h2>Contact Us</h2>
		<form>
		  <div className="mb-3">
			<label htmlFor="name" className="form-label">Name</label>
			<input type="text" className="form-control" id="name" placeholder="Your Name" />
		  </div>
		  <div className="mb-3">
			<label htmlFor="email" className="form-label">Email</label>
			<input type="email" className="form-control" id="email" placeholder="Your Email" />
		  </div>
		  <div className="mb-3">
			<label htmlFor="message" className="form-label">Message</label>
			<textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
		  </div>
		  <button type="submit" className="btn btn-primary">Send</button>
		</form>
	  </div>
	  <div className="col-md-6">
		<h2>Our Location</h2>
		<iframe
		  title="Google Maps"
		  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.484555972618!2d-122.08424968468186!3d37.42199977982513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e1b2cbbbbb%3A0x8f0e2d5463ae21b!2sGoogleplex!5e0!3m2!1sen!2sus!4v1634271921567!5m2!1sen!2sus"
		  width="100%"
		  height="400"
		  style={{ border: 0 }}
		  allowFullScreen=""
		  loading="lazy"
		></iframe>
	  </div>
	</div>
  </div>
  )
}
