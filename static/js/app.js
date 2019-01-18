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
var clearButton = d3.select("#clear-btn");

// Creates the clear function on click
clearButton.on("click", function() {
    // Prevents reloading the page, except kept here for illustrative purposes - functionally want the page to reload
    // d3.event.preventDefault();
    
    // Repopulates the data
    tableData.forEach((entry) => {
        var row = tbody.append("tr");
        Object.entries(entry).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});

// Creates the filter function on click
filterButton.on("click", function() {
    // Prevents reloading the page
    d3.event.preventDefault();
    // Removes all data in the selection
    d3.selectAll("td").remove()

    // Using d3.select to find the datetime DOM element in the html
    var inputElementdatetime = d3.select("#datetime");
    var inputElementcity = d3.select("#city");
    var inputElementstate = d3.select("#state");
    var inputElementcountry = d3.select("#country");
    var inputElementshape = d3.select("#shape");

    // The user's search query
    var inputValuedatetime = inputElementdatetime.property("value");
    var inputValuecity = inputElementcity.property("value");
    var inputValuestate = inputElementstate.property("value");
    var inputValuecountry = inputElementcountry.property("value");
    var inputValueshape = inputElementshape.property("value");

    // Filters data to entries matching the search query inputValue
    var filteredDatadatetime = sightings.filter(sighting => sighting.datetime === inputValuedatetime);
    var filteredDatacity = sightings.filter(sighting => sighting.city === inputValuecity);
    var filteredDatastate = sightings.filter(sighting => sighting.state === inputValuestate);
    var filteredDatacountry = sightings.filter(sighting => sighting.country === inputValuecountry);
    var filteredDatashape = sightings.filter(sighting => sighting.shape === inputValueshape);

    // Using d3.select to find the tbody DOM element in the html, echoes the initial/default tbody variable
    var tbody = d3.select("tbody");

    // For every data in tableData, a forEach() method that appends both table row and data with the now filtered value(s)
    filteredDatadatetime.forEach((filteredSightings) => {
        var row = tbody.append("tr");
        Object.entries(filteredSightings).forEach(([key, value]) =>{
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
    filteredDatacity.forEach((filteredSightings) => {
        var row = tbody.append("tr");
        Object.entries(filteredSightings).forEach(([key, value]) =>{
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
    filteredDatastate.forEach((filteredSightings) => {
        var row = tbody.append("tr");
        Object.entries(filteredSightings).forEach(([key, value]) =>{
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
    filteredDatacountry.forEach((filteredSightings) => {
        var row = tbody.append("tr");
        Object.entries(filteredSightings).forEach(([key, value]) =>{
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
    filteredDatashape.forEach((filteredSightings) => {
        var row = tbody.append("tr");
        Object.entries(filteredSightings).forEach(([key, value]) =>{
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});

// Has a function for filtering, uses ".this"