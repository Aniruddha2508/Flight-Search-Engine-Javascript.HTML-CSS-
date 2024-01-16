const flights = [
    { origin: 'Pune', destination: 'Mumbai', departureDate: '2024-02-01', returnDate: '2024-02-10', price: 500, fromShortname :"Pun",toShortname : "Mum" },
    { origin: 'Mumbai', destination: 'Pune', departureDate: '2024-02-01', returnDate: '2024-02-10', price: 500, toShortname :"Pun" ,fromShortname : "Mum"},
    { origin: 'Pune', destination: 'Delhi', departureDate: '2024-02-01', returnDate: '2024-02-10', price: 500, fromShortname :"Pun",toShortname:"Del" },
    { origin: 'Delhi', destination: 'Mumbai', departureDate: '2024-02-01', returnDate: '2024-02-10', price: 500, toShortname : "Mum",fromShortname:"Del" },
    { origin: 'Pune', destination: 'Delhi', departureDate: '2024-02-01', returnDate: '2024-02-10', price: 300, fromShortname :"Pun",toShortname:"Del" },
    
];

function searchFlights() {
    
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departureDate').value;
    const returnDate = document.getElementById('returnDate').value;
    const tripType = document.querySelector('input[name="tripType"]:checked').value;
    const priceRange = document.getElementById('priceRange').value;

    // Perform search based on user input
    const filteredFlights = flights.filter(flight => {
        return (
            flight.origin.toLowerCase().includes(origin.toLowerCase()) &&
            flight.destination.toLowerCase().includes(destination.toLowerCase()) &&
            flight.departureDate === departureDate &&
            (tripType === 'oneWay' || flight.returnDate === returnDate) &&
            flight.price <= priceRange
        );
    });

    // Display search results
    displaySearchResults(filteredFlights);
}

function displaySearchResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No flights found.</p>';
    } else {
        results.forEach(flight => {
            const flightInfo = document.createElement('div');
            flightInfo.innerHTML = `
                    <div id=searchbox>
                        <div id='searchinfo'>
                        
                            <strong>${flight.origin} to ${flight.destination}</strong><br>
                                    Departure Date: ${flight.departureDate}<br>
                                    Return Date: ${flight.returnDate}<br>
                                    Price: Rs${flight.price}
                        </div>
                    
                        <div id="imagesearchbox">
                            <img src="OIP.jpg" width="128" height="128"><br>
                            <button>Book Flight</button>
                        </div>
                
                    </div>`;
            resultsContainer.appendChild(flightInfo);
        });
    }
}

document.querySelectorAll('input[name="tripType"]').forEach(radio => {
        radio.addEventListener('change', function () {
            document.getElementById('returnDate').disabled = this.value === 'oneWay';
        });
    });

    
    document.getElementById('priceRange').addEventListener('change', function () {
        searchFlights(); 
    });
   
    function updateRangeValue() {
        const rangeValue = document.getElementById('priceRange').value;
        document.getElementById('rangeValue').textContent = `Selected Value: Rs${rangeValue}`;
    }
