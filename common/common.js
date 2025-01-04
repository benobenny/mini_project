


document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `

 
      <header>
      <div class="headerNav">    
        <nav>
            <p>The City of London</p>
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="../gallery/gallery.html">Gallery</a></li>
                <li><a href="../maps/maps.html">Maps</a></li>
                <li><a href="../weather/weather.html">Weather</a></li>
                <li><a href="../localRoutes/localRoutes.html">Local Maps</a></li>
                <li><a href="../hotel/hotel.html">Book Hotels</a></li>
                <li><a href="../events/events.html">Find Events</a></li>
                <li><a href="../noticeboard/noticeboard.html">Noticeboard</a></li>
                <li><a href="../administration/administration.html">Administration</a></li>
                <li><a href="../culture/culture.html">People and Culture</a></li>
                <li><a href="../transport/transport.html">Transport</a></li>
                <li><a href="../tourism/tourism.html">Tourism</a></li>
            </ul>
        </nav>
      </div>
      </header>

    <footer>
        <div class="footerDiv">
            <a href="../index.html">The City of London</a>
            <a href="../about.html">About</a>
        </div>
    </footer>

    `;
    
    
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
  });