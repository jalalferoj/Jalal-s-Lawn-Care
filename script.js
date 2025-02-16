document.addEventListener("DOMContentLoaded", () => {
  // Services data
  const services = [
    {
      title: "Lawn Mowing",
      description: "Regular mowing to keep your lawn healthy and looking its best.",
      image: src="images/2.jpg",
    },
    {
      title: "Edging and Trimming",
      description: "Precise edging and trimming for a polished look.",
      image: src="images/trim-lawn-edges-2.jpg",
    },
    {
      title: "Fertilization",
      description: "Nutrient application to promote lush, green growth.",
      image: src="images/Fertilization.jpg",
    },
    {
      title: "Weed Control",
      description: "Effective weed management to maintain a beautiful lawn.",
      image: src="images/Weed Control.jpg",
    },
    {
      title: "Landscaping",
      description: "Design and installation of beautiful landscape features.",
      image: src="images/3.jpg",
    },
    {
      title: "Seasonal Clean-up",
      description: "Thorough cleaning and preparation for each season.",
      image: src="images/1.jpg",
    },
  ]

  // Populate services on the services page
  const servicesContainer = document.getElementById("services-container")
  if (servicesContainer) {
    services.forEach((service) => {
      const serviceElement = document.createElement("div")
      serviceElement.className = "bg-white p-6 rounded-lg shadow-lg"
      serviceElement.innerHTML = `
                <img src="${service.image}" alt="${service.title}" class="rounded-lg mb-4">
                <h2 class="text-2xl font-semibold text-green-700 mb-2">${service.title}</h2>
                <p class="mb-4">${service.description}</p>
            `
      servicesContainer.appendChild(serviceElement)
    })
  }

  // Handle contact form submission
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const formData = new FormData(contactForm)
      const formObject = Object.fromEntries(formData.entries())
      console.log("Form submitted:", formObject)
      alert("Thank you for your message. We will get back to you soon!")
      contactForm.reset()
    })
  }
})

