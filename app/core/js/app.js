Promise.all([

    fetch('app/sections/menu/menu-01.html')
        .then(response => response.text()),

    fetch('app/sections/hero/hero-04.html')
        .then(response => response.text()),

    fetch('app/sections/about/about-01.html')
        .then(response => response.text()),
    
    fetch('app/sections/services/services-01.html')
    .then(response => response.text()),

    fetch('app/sections/pricing/pricing-01.html')
    .then(response => response.text()),

    fetch('app/sections/cta/cta-01.html')
    .then(response => response.text()),

    fetch('app/sections/testimonials/testimonials-01.html')
    .then(response => response.text()),

    fetch('app/sections/faq/faq-01.html')
    .then(response => response.text()),

    fetch('app/sections/contact/contact-01.html')
    .then(response => response.text()),

    fetch('app/sections/footer/footer-01.html')
    .then(response => response.text())

])

.then(([menuHtml, heroHtml, aboutHtml, servicesHtml, pricingHtml, ctaHtml, testimonialsHtml, faqHtml, contactHtml, footerHtml]) => {

    document.getElementById('app').innerHTML =
    menuHtml +
    heroHtml +
    aboutHtml +
    servicesHtml +
    pricingHtml +
    ctaHtml +
    testimonialsHtml +
    faqHtml +
    contactHtml +
    footerHtml ;

    document.title =
        businessData.page_title;

    document.querySelector('.logo-text').innerText =
        businessData.business_name;

    document.querySelector('.header-phone').innerText =
        businessData.phone;

    document.querySelector('.header-cta').innerText =
        businessData.cta_text;

    document.querySelector('.hero-title').innerText =
        businessData.hero_title;

    document.querySelector('.hero-subtitle').innerText =
        businessData.hero_subtitle;

    document.querySelector('.about-title').innerText =
        businessData.about_title;

    document.querySelector('.about-description').innerText =
        businessData.about_description;

    const menuContainer =
        document.querySelector('.menu-list');

    businessData.menu.forEach(item => {

        menuContainer.innerHTML += `
            <li>
                <a href="${item.url}">
                    ${item.text}
                </a>
            </li>
        `;

    });

    const pointsContainer =
        document.querySelector('.about-points');

    businessData.about_points.forEach(point => {

        pointsContainer.innerHTML += `
            <li>${point}</li>
        `;

    });

    document.querySelector('.services-title').innerText =
    businessData.services_title;

document.querySelector('.services-subtitle').innerText =
    businessData.services_subtitle;

const servicesContainer =
    document.querySelector('.services-grid');

businessData.services.forEach(service => {

    servicesContainer.innerHTML += `
        <div class="service-card">

            <div class="service-icon">
                ${service.icon}
            </div>

            <h3>
                ${service.title}
            </h3>

            <p>
                ${service.description}
            </p>

        </div>
    `;

});

document.querySelector('.cta-title').innerText =
    businessData.cta_title;

document.querySelector('.cta-description').innerText =
    businessData.cta_description;

document.querySelector('.cta-primary').innerText =
    businessData.cta_button_1;

document.querySelector('.cta-secondary').innerText =
    businessData.cta_button_2;

document.querySelector('.contact-title').innerText =
    businessData.contact_title;

document.querySelector('.contact-description').innerText =
    businessData.contact_description;

document.querySelector('.contact-phone').innerText =
    businessData.phone;

document.querySelector('.contact-email').innerText =
    businessData.email;

document.querySelector('.contact-address').innerText =
    businessData.address;

document.querySelector('.footer-text').innerText =
    `© ${new Date().getFullYear()} ${businessData.business_name}. ${businessData.footer_text}`;

document.querySelector('.pricing-title').innerText =
    businessData.pricing_title;

document.querySelector('.pricing-subtitle').innerText =
    businessData.pricing_subtitle;

const pricingContainer =
    document.querySelector('.pricing-grid');

businessData.pricing.forEach(plan => {

    pricingContainer.innerHTML += `

        <div class="pricing-card ${plan.popular ? 'pricing-popular' : ''}">

            ${plan.popular ? `
                <div class="pricing-badge">
                    MOST POPULAR
                </div>
            ` : ''}

            <h3 class="pricing-name">
                ${plan.name}
            </h3>

            <div class="pricing-price">
                ${plan.price}
            </div>

            <ul class="pricing-features">

                ${plan.features.map(feature =>
                    `<li>${feature}</li>`
                ).join('')}

            </ul>

            <a href="#" class="btn">
                ${plan.button}
            </a>

        </div>

    `;

});

document.querySelector('.testimonials-title').innerText =
    businessData.testimonials_title;

document.querySelector('.testimonials-subtitle').innerText =
    businessData.testimonials_subtitle;

const testimonialContainer =
    document.querySelector('.testimonials-grid');

businessData.testimonials.forEach(item => {

    testimonialContainer.innerHTML += `

        <div class="testimonial-card">

            <div class="testimonial-stars">
                ⭐⭐⭐⭐⭐
            </div>

            <p class="testimonial-review">
                "${item.review}"
            </p>

            <div class="testimonial-author">

                <strong>
                    ${item.name}
                </strong>

                <span>
                    ${item.position}
                </span>

            </div>

        </div>

    `;

});

document.querySelector('.faq-title').innerText =
    businessData.faq_title;

document.querySelector('.faq-subtitle').innerText =
    businessData.faq_subtitle;

const faqContainer =
    document.querySelector('.faq-list');

businessData.faq.forEach(item => {

    faqContainer.innerHTML += `

        <div class="faq-item">

            <div class="faq-question">

                <span>
                    ${item.question}
                </span>

                <span class="faq-icon">
                    +
                </span>

            </div>

            <div class="faq-answer">

                ${item.answer}

            </div>

        </div>

    `;

});

setTimeout(() => {

    document
        .querySelectorAll('.faq-question')
        .forEach(question => {

            question.addEventListener('click', () => {

                const item =
                    question.parentElement;

                item.classList.toggle('active');

            });

        });

}, 100);

const scrollBtn =
    document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {

    if(window.scrollY > 400){

        scrollBtn.classList.add('show');

    } else {

        scrollBtn.classList.remove('show');

    }

});

scrollBtn.addEventListener('click', () => {

    window.scrollTo({

        top:0,

        behavior:'smooth'

    });

});

})

.catch(error => {

    console.error(error);

});