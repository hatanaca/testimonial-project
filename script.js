const testimonials = [
	{
		text:"textoGenerico",
		author:"textoGenerico"
	},
	{
		text:"textoGenerico" ,
		author:"textoGenerico" 
	},
	{
		text:"textoGenerico" ,
		author:"textoGenerico" 
	}
];

let currentIndex = 0;
const textElement = document.getElementById("testimonial-text");
const authorElement = document.getElementById("testimonial-author");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function updateTestimonial(index) {
	textElement.textContent = testimonials[index].text;
	authorElement.textContent = testimonials[index].author;
}

prevBtn.addEventListener("click", () => {
	currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
	updateTestimonial(currentIndex);
});

nextBtn.addEventListener("click", () => {
	currentIndex = (currentIndex === testimonials.length -1) ? 0 :currentIndex +1;
	updateTestimonial(currentIndex);
});

		
