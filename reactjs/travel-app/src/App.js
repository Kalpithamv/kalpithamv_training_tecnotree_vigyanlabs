import React from 'react';

class App extends React.Component {
  state = {
    destinations: [
      { name: 'Paris', description: 'The City of Light', imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/01/db/2a/caption.jpg?w=300&h=300&s=1' },
      { name: 'Tokyo', description: 'The Land of the Rising Sun', imageUrl: 'https://www.gotokyo.org/shared/site_gotokyo/images/event-calendar/ximg_35.jpg.pagespeed.ic.n4OgVdItrv.jpg' },
      { name: 'Sydney', description: 'The Harbour City', imageUrl: 'https://harbourcovemarina.com/content/uploads/2022/11/tout-slips_sunset-300x300.jpg'},
      
    ]
  }

  handleClick = () => {
    alert('Booked!');
  }
 
  render() {
    return (
      <div>
        <h1>Travel Destinations</h1>
        
        <ul>
          {this.state.destinations.map((destination, index) => (
            <li key={index}>
              <h2>{destination.name}</h2>
              <p>{destination.description}</p>
              <img src={destination.imageUrl} alt={destination.name}/>
              <button onClick={this.handleClick}>Book</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
