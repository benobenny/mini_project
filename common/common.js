


document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `

      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="icon" type="image/x-icon" href="/City of London/common/favicon.ico">
          <link rel="stylesheet" href="/City of London/common/common.css">
          <link rel="stylesheet" href="/City of London/common/color.css">
          <link rel="stylesheet" href="/City of London/common/fonts.css">
      </head>

      <header>
      <div class="headerNav">    
        <nav>
            <p>The City of London</p>
            <ul>
                <li><a href="/City of London/index.html">Home</a></li>
                <li><a href="/City of London/gallery/gallery.html">Gallery</a></li>
                <li><a href="/City of London/maps/maps.html">Maps</a></li>
                <li><a href="/City of London/weather/weather.html">Weather</a></li>
                <li><a href="/City of London/localRoutes/localRoutes.html">Local Maps</a></li>
                <li><a href="/City of London/hotel/hotel.html">Book Hotels</a></li>
                <li><a href="/City of London/events/events.html">Find Events</a></li>
                <li><a href="/City of London/noticeboard/noticeboard.html">Noticeboard</a></li>
                <li><a href="/City of London/administration/administration.html">Administration</a></li>
                <li><a href="/City of London/culture/culture.html">People and Culture</a></li>
                <li><a href="/City of London/transport/transport.html">Transport</a></li>
                <li><a href="/City of London/tourism/tourism.html">Tourism</a></li>
            </ul>
        </nav>
      </div>
      </header>

    <footer>
        <div class="footerDiv">
            <a href="/City of London/index.html">The City of London</a>
            <a href="/City of London/about.html">About</a>
        </div>
    </footer>

    `;
    
    
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
  });