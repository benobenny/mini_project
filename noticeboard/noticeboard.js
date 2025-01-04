const RSS_URLS = [
    'https://api.allorigins.win/raw?url=https://www.london.gov.uk/rss-feeds/80610',
    'https://api.allorigins.win/raw?url=https://www.mylondon.news/news/?service=rss',
];

async function fetchRSS() {
    try {
        const eventsContainer = document.getElementById("events-container");
        let eventsHTML = `<div class="event-grid">`; // Start grid container

        const feeds = await Promise.all(
            RSS_URLS.map(url => fetch(url).then(response => response.text()))
        );

        feeds.forEach(feed => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(feed, "text/xml");
            const items = xml.querySelectorAll("item");

            items.forEach(item => {
                const title = item.querySelector("title")?.textContent.trim() || "No title available";
                const description = item.querySelector("description")?.textContent.trim() || "No description available";
                const link = item.querySelector("link")?.textContent.trim() || "#";
                const pubDate = item.querySelector("pubDate")?.textContent.trim() || "";
                const image = item.querySelector("media\\:content, enclosure")?.getAttribute("url") || null;

                eventsHTML += `
                    <div class="event-card">
                        ${image ? `<img src="${image}" alt="${title}" class="event-image">` : ""}
                        <h3>${title}</h3>
                        <p>${description}</p>
                        <a href="${link}" target="_blank">Read More</a>
                        <p class="date">${pubDate ? new Date(pubDate).toDateString() : "No date available"}</p>
                    </div>
                `;
            });
        });

        eventsHTML += `</div>`; // End grid container
        eventsContainer.innerHTML = eventsHTML || "<p>No events found.</p>";
    } catch (error) {
        console.error("Error fetching the RSS feeds:", error);
        document.getElementById("events-container").innerHTML = "<p>Failed to load events.</p>";
    }
}

fetchRSS();
