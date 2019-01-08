// Importing data from data.js
var tableData = data;

// YOUR CODE HERE!
// Using d3.select to find the tbody DOM element in the html
var tbody = d3.select("tbody"); 

// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// For every data in tableData a forEach() method that appends both table row and data with the value
tableData.forEach((entry) => {
    var row = tbody.append("tr");
    Object.entries(entry).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    });
});

// Solution adapted from StackOverflow questions by GrumpyCrouton & Matt Brown on filtering table data
// Defining variables for now filtered data as sightings and the filter button
var sightings = data;
var filterButton = d3.select("#filter-btn");

// Creates the filter function on click
filterButton.on("click", function() {
    // Prevents reloading the page
    d3.event.preventDefault();
    // Removes all data in the selection
    d3.selectAll("td").remove()

    // Using d3.select to find the datetime DOM element in the html
    var inputElement = d3.select("#datetime");

    // The user's search query
    var inputValue = inputElement.property("value");

    // Filters data to entries matching the search query inputValue
    var filteredData = sightings.filter(sighting => sighting.datetime === inputValue);

    // Using d3.select to find the tbody DOM element in the html, echoes the initial/default tbody variable
    var tbody = d3.select("tbody");

    // For every data in tableData, a forEach() method that appends both table row and data with the now filtered value(s)
    filteredData.forEach((filteredSightings) => {
        var row = tbody.append("tr");
        Object.entries(filteredSightings).forEach(([key, value]) =>{
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});
