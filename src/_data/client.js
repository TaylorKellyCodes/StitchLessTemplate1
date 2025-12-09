module.exports = {
    name: "Wilson HVAC",
    email: "taylorkellycodes@gmail.com",
    phoneForTel: "828-406-2325",
    phoneFormatted: "(828) 406-2325",
    address: {
        lineOne: "First Address Line",
        lineTwo: "Second Address Line",
        city: "Wilson",
        state: "NC",
        zip: "28695",
        country: "US",
        mapLink: "https://maps.app.goo.gl/n6ikhT8CQ11y5aVWA",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
