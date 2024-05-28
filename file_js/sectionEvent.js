var array = [
    {imageSource: '../asset/E1.jpg',
    eventName: 'ArtScape: Colors of Expression',
    eventDescription: "Experience a diverse collection of artworks from renowned artists and emerging talents across various mediums. From paintings and sculptures to installations and digital art, this exhibition showcases the power of creativity and invites you to explore different perspectives.",
    eventDate: '15 December 2023 | 11:00 AM -13:00 AM',
    },
    {imageSource: '../asset/E3.jpg',
    eventName: 'TechXpo 2023 - Exploring Innovations in Technology',
    eventDescription: "Explore the latest trends and breakthroughs in technology through engaging presentations, interactive workshops, and networking opportunities. Get ready to dive into the world of cutting-edge technologies, from AI and robotics to blockchain and IoT. ",
    eventDate: '10-20 may 2023 | 3:00 PM - 5:00 PM',
    },
    {imageSource: '../asset/E5.jpg',
    eventName: 'Discovering Creativity',
    eventDescription: "Engage in hands-on art activities led by experienced artists who will guide you through various techniques and mediums. This workshop offers a nurturing and inspiring environment to explore your creativity. Discover new art forms, experiment with different materials.",
    eventDate: '22 July 2022 | 6:00 PM - 8:00 PM',
    },
    {imageSource: '../asset/E0.jpg',
    eventName: "Marketing Mastery Summit 2023",
    eventDescription: "Join top marketing experts, industry professionals, and thought leaders as they share invaluable insights and strategies to stay ahead in the dynamic world of marketing. This conference offers a comprehensive platform for learning, networking, and discovering innovative marketing approaches.",
    eventDate: '25-28 Desember 2023 | 1:00 PM - 5:00 PM',
    },
    {imageSource: '../asset/E6.jpg',
    eventName: 'Through the Lens',
    eventDescription: "This exhibition showcases a collection of stunning photographs captured by talented photographers from around the globe. From breathtaking landscapes to intimate portraits, each photograph tells a unique story and captures the essence of the subject.",
    eventDate: '23-25 December 2024 | 10:00 AM - 11:00 AM',
    }
]


var event1 = document.getElementById('event-container');

for (let index = 0; index < array.length; index++) {
    event1.innerHTML += `
    <div>
        <div class="img-container${index}">
        </div>
        <div class="event-info">
            <h2 >${array[index].eventName}</h2>
            <h3>${array[index].eventDescription}</h3>
            <h4>${array[index].eventDate}</h4>
            <button>
                View Details <img src="../asset/play-button.png" alt="">
            </button>
        </div>
    </div>
    `;
}
{/* <div class="img-container">
<img src="${array[index].imageSource}" alt="">
</div> */}


