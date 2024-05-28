var array = [
    {
        Tier: "Basic",
        Price: "Rp 100.000.000",
        Desc: 'The Standard Package offers everything you need for a successful conference. It includes access to our fully equipped conference rooms, state-of-the-art audiovisual equipment, comfortable seating arrangements, and high-speed Wi-Fi. Enjoy the convenience of our dedicated event staff who will assist you in coordinating your event from start to finish.',
        Benefit1: 'Fully equipped conference rooms with advanced audiovisual equipment.',
        Benefit2: 'Comfortable seating arrangements for attendees.',
        Benefit3: 'High-speed Wi-Fi connectivity throughout the venue.',
        Benefit4: 'Dedicated staff to assist in coordinating your events.',
        imageSource: '../asset/CC1.jpg',
    },
    {
        Tier:"Executive",
        Price: "Rp 200.000.000",
        Desc:'Elevate your conference experience with our Executive Package. Alongside the amenities provided in the Standard Package, you will receive upgraded catering options, including a delectable assortment of gourmet meals, refreshments, and snacks. Our team will ensure impeccable service and attention to detail, guaranteeing a seamless and memorable event for your esteemed guests.',
        Benefit1: 'All the amenities of the Standard Package.',
        Benefit2: 'Upgraded catering options, including a variety of gourmet meals, refreshments, and snacks.',
        Benefit3: 'Personalized menu planning and dietary accommodations.',
        Benefit4: 'Enhanced ambiance and attention to detail.',
        imageSource: '../asset/CC2.jpg',
    },
    {
        Tier: "Premium",
        Price: "Rp 300.000.000",
        Desc: 'The Premium Package offers a truly luxurious conference experience. In addition to all the features of the Executive Package, you will enjoy exclusive access to our VIP lounge area, complete with comfortable seating, a private barista service, and a dedicated concierge. Delight your attendees with a touch of opulence and make a lasting impression.',
        Benefit1: 'All the amenities of the Executive Package.',
        Benefit2: 'Exclusive access to the VIP lounge area.',
        Benefit3: 'Dedicated concierge for personalized assistance.',
        Benefit4: 'Premium amenities and luxurious surroundings.',
        imageSource: '../asset/CC3.jpg',
    }
]
var packages = document.getElementById('package-container');
for(let index = 0;index<array.length;index++){
    packages.innerHTML +=`
    <div>
        <div class="package-content">
            <div class="Tier"><h1>${array[index].Tier}</h1></div>
            <div class="Price"><h2>${array[index].Price}</h2></div>
            <div class="Desc">
                <h3>
                    ${array[index].Desc}
                </h3>
            </div>
            <div>
                <ul>
                    <li>
                        <div>
                            <img src="../asset/check-list.png" alt="">
                        </div>
                        <div>
                            <p>${array[index].Benefit1}</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="../asset/check-list.png" alt="">
                        </div>
                        <div>
                            <p>${array[index].Benefit2}</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="../asset/check-list.png" alt="">
                        </div>
                        <div>
                            <p>${array[index].Benefit3}</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src="../asset/check-list.png" alt="">
                        </div>
                        <div>
                            <p>${array[index].Benefit4}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <button>
                View Details <img src="../asset/play-button.png" alt="">
            </button>
        </div>
        <div class="packageImage-container${index}">

        </div>
    </div>
`
}