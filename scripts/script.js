// mok data

const eventsStore = [
    {
      title: "INFJ Personality Type - Coffee Shop Meet & Greet",
      description: "Being an INFJ",
      date: new Date(2024, 2, 23, 15),
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop",
      type: "offline",
      attendees: 99,
      category: "Hobbies and Passions",
      distance: 50,
    },
    {
      title: "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
      description: "New York AI Users",
      date: new Date(2024, 2, 23, 11, 30),
      image: "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 43,
      category: "Technology",
      distance: 25,
    },
    {
      title: "Book 40+ Appointments Per Month Using AI and Automation",
      description: "New Jersey Business Network",
      date: new Date(2024, 2, 16, 14),
      image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop",
      type: "online",
      category: "Technology",
      distance: 10,
    },
    {
      title: "Dump writing group weekly meetup",
      description: "Dump writing group",
      date: new Date(2024, 2, 13, 11),
      image: "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop",
      type: "online",
      attendees: 77,
      category: "Business",
      distance: 100,
    },
    {
      title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
      description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
      date: new Date(2024, 2, 14, 11),
      image: "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop",
      type: "online",
      attendees: 140,
      category: "Social Activities",
      distance: 75,
    },
    {
      title: "All Nations - Manhattan Missions Church Bible Study",
      description: "Manhattan Bible Study Meetup Group",
      date: new Date(2024, 2, 14, 11),
      image: "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      category: "Health and Wellbeing",
      distance: 15,
    },
];

  function renderEvents(events) {
    const container = document.querySelector(".events_filter_content");
    container.innerHTML = "";

    events.forEach(event => {
      const card = document.createElement("div");
      card.classList.add("event_card");

      const date = new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZoneName: "short"
      }).format(event.date);

      card.innerHTML = `
        <img src="${event.image}" alt="${event.title}" class="event_image" />
        <div class="event_text">
          <h3 class="event_title">${event.title}</h3>
          <p class="event_desc">${event.category} (${event.distance} km)</p>
          <p class="event_date">${date}</p>
          <p class="event_info">
            <span>${event.attendees || 0} going</span> | <span>${event.type === "online" ? "Online Event" : "Free"}</span>
          </p>
        </div>
      `;

      container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderEvents(eventsStore);
});

//filter

const filters = {
    type: "",
    distance: "",
    category: "",
    date: ""
  };

  document.getElementById("filter_type").addEventListener("change", e => {
    filters.type = e.target.value;
    applyFilters();
  });

  document.getElementById("filter_distance").addEventListener("change", e => {
    filters.distance = e.target.value;
    applyFilters();
  });

  document.getElementById("filter_category").addEventListener("change", e => {
    filters.category = e.target.value;
    applyFilters();
  });

  document.getElementById("filter_date").addEventListener("change", e => {
    filters.date = e.target.value;
    applyFilters();
  });

  function applyFilters() {
    const filtered = eventsStore.filter(event => {
      return (
        (!filters.type || event.type === filters.type) &&
        (!filters.category || event.category === filters.category) &&
        (!filters.distance || event.distance <= Number(filters.distance)) &&
        (!filters.date || isSameDate(event.date, new Date(filters.date)))
      );
    });

    renderEvents(filtered);
  }

  function isSameDate(date1, date2) {
  const d1 = date1.toISOString().split("T")[0];
  const d2 = date2.toISOString().split("T")[0];
  return d1 === d2;
}
