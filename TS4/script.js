const restaurantData = {
    gabbel: {
        pic: "https://i.pinimg.com/736x/c6/d3/90/c6d390d21bfa4479f8348993be481948.jpg",
        name: "Gabbel Loffel",
        address: "235 Glendale Ave, Meridien City",
        phone: "490 49 4000",
        website: "GANDG.RES",
        category: "Swiss",
        hours: "10AM - 10PM",
        price: "$$$",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet.\n\nMauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac."
    },
    gary: {
        pic: "https://i.pinimg.com/736x/48/b2/9d/48b29dae8b93a069efb3cb202c8a84a4.jpg",
        name: "GARY GARI",
        address: "76 No. Highland Ave, Meridien City",
        phone: "490 24 6709",
        website: "GANDG.RES",
        category: "Japanese",
        hours: "5PM - 10PM",
        price: "$$$",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.\n\nFusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue."
    },
    ilpiatto: {
        pic: "https://i.pinimg.com/736x/44/0e/70/440e702aacce1b0c35cfb2d71967dad6.jpg",
        name: "IL PIATTO",
        address: "1213 Shoutout Way, Meridien City",
        phone: "490 42 1204",
        website: "ILPIATTO.RES",
        category: "Italian",
        hours: "11AM - 11PM",
        price: "$$$",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.\n\nMaecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue."
    },
    pierre: {
        pic: "https://i.pinimg.com/736x/ea/4c/88/ea4c889b2288b729df6b5ec7b7359a9f.jpg",
        name: "PIERRE PLATTERS",
        address: "68 8th Ave, Meridien City",
        phone: "490 69 3080",
        website: "PIERREPRES",
        category: "Fusion",
        hours: "11AM - 11PM",
        price: "$$$",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.\n\nMaecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue."
    }
};

function showDetails(restaurant) {
    const data = restaurantData[restaurant];
    if (!data) return;

    // Set popup content
    document.getElementById("popup-decorative").textContent = data.name;
    document.getElementById("popup-name").textContent = data.name;
    document.getElementById("popup-image").src = data.pic;
    document.getElementById("popup-name").textContent = data.name;
    document.getElementById("popup-address").textContent = data.address;
    document.getElementById("popup-phone").textContent = data.phone;
    document.getElementById("popup-website").textContent = data.website;
    document.getElementById("popup-category").textContent = data.category;
    document.getElementById("popup-hours").textContent = data.hours;
    document.getElementById("popup-price").textContent = data.price;
    
    // Format description with paragraphs
    const descriptionParagraphs = data.description.split('\n\n')
        .map(para => `<p>${para}</p>`)
        .join('');
    document.getElementById("popup-description").innerHTML = descriptionParagraphs;

    // Show popup
    document.getElementById("restaurant-popup").style.display = "block";
    document.body.style.overflow = "hidden";

    // Hide restaurants container
    document.querySelector(".restaurants").style.display = "none";

}

function closePopup() {
    document.getElementById("restaurant-popup").style.display = "none";
    document.body.style.overflow = "auto";

     // Show restaurants container again
     document.querySelector(".restaurants").style.display = "flex";
}

// Attach click events to restaurant cards
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function() {
        showDetails(this.getAttribute("data-id"));
    });
});