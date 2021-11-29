const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["images"]["logo-img"]);

//Updating nav section
const navSect = document.querySelectorAll('nav a')
navSect[0].textContent = siteContent['nav']['nav-item-1'];
navSect[1].textContent = siteContent['nav']['nav-item-2'];
navSect[2].textContent = siteContent['nav']['nav-item-3'];
navSect[3].textContent = siteContent['nav']['nav-item-4'];
navSect[4].textContent = siteContent['nav']['nav-item-5'];
navSect[5].textContent = siteContent['nav']['nav-item-6'];

const libraryLink = document.createElement('a');
libraryLink.textContent = 'Library';
libraryLink.href = 'a';
document.querySelector('nav').appendChild(libraryLink);

const domLink = document.createElement('a');
domLink.textContent = 'DOM';
domLink.href = 'a';
document.querySelector('nav').prepend(domLink);

const navStyle = document.querySelectorAll('header nav a');
navStyle.forEach(italic => {
  italic.style.fontStyle = 'italic'
});



//Updating cta section
const h1Sect = document.querySelector('h1');
h1Sect.textContent = siteContent['cta']['h1'];
const button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];
const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src',siteContent['images']['cta-img']);
//Updating main-content
const features = document.querySelector('.top-content .text-content:nth-of-type(1) h4');
const featuresContent = document.querySelector('.top-content .text-content:nth-of-type(1) p');
const about = document.querySelector('.top-content .text-content:nth-of-type(2) h4');
const aboutContent = document.querySelector('.top-content .text-content:nth-of-type(2) p');
//main content text
features.textContent = siteContent['main-content']['features-h4'];
featuresContent.textContent= siteContent['main-content']['features-content'];
about.textContent = siteContent['main-content']['about-h4'];
aboutContent.textContent = siteContent['main-content']['about-content'];
//main content images
const midImg = document.querySelector('#middle-img');
midImg.setAttribute('src',siteContent['images']['accent-img']);
//Updating bottom content
const services = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
const servicesContent = document.querySelector('.bottom-content .text-content:nth-of-type(1) p')
services.textContent = siteContent['main-content']['services-h4']
servicesContent.textContent = siteContent['main-content']['services-content'];

const product = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
product.textContent = siteContent['main-content']['product-h4'];
const productContent = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
productContent.textContent = siteContent['main-content']['product-content'];

const vision = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
vision.textContent = siteContent['main-content']['vision-h4'];
const visionContent = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
visionContent.textContent = siteContent['main-content']['vision-content'];
//Contact section
const contact = document.querySelector('.contact h4');
contact.textContent = siteContent['contact']['contact-h4'];

const contactAddress = document.querySelector('.contact p:nth-of-type(1)');
contactAddress.textContent = siteContent['contact']['address'];

const contactPhone = document.querySelector('.contact p:nth-of-type(2)');
contactPhone.textContent = siteContent['contact']['phone'];

const contactEmail = document.querySelector('.contact p:nth-of-type(3)');
contactEmail.textContent = siteContent['contact']['email'];
//footer
const footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];
const footerA = document.querySelector('footer a');
footerA.classList.add('bold');
