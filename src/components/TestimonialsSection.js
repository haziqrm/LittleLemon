import React from "react";

const testimonials = [
  {
    name: "Sarah",
    review: "I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!",
    image: "/assets/icon.jpg",
    rating: 5,
  },
  {
    name: "John",
    review: "I went to the restaurant with my family and we were very pleased with everything. The food was wonderful and the atmosphere was very cozy. I highly recommend it!",
    image: "/assets/icon.jpg",
    rating: 5,
  },
  {
    name: "Emily",
    review: "I have been to many restaurants, but this one certainly stood out. The quality of the ingredients and the preparation of the dishes were impeccable. Not to mention the presentation,",
    image: "/assets/icon.jpg",
    rating: 4,
  },
  {
    name: "Carlos",
    review: "The restaurant has a great variety of dishes and all the ones I tried were excellent. In addition, the price is fair and the service is very attentive. I will definitely recommend it to my friends.",
    image: "/assets/icon.jpg",
    rating: 5,
  },
];

function TestimonialsSection() {
  return (
    <div className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-box">
            <div>{"⭐".repeat(t.rating)}</div>
            <img src={t.image} alt={t.name} />
            <h4>{t.name}</h4>
            <p>{t.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsSection;