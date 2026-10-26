/*CIVICIFY LOCATION SEARCH SCRIPT*/

//Find the elements on our webpage
const form = document.getElementById('location-form');
const stateSelect = document.getElementById('state');
const zipInput = document.getElementById('zipcode');
const result = document.getElementById('search-result');

// Listen for the form submission
form.addEventListener('submit', function(event) {

    // Prevent the page from reloading
    event.preventDefault();

    // Get the selected state and zip code
    const state = stateSelect.value;
    const zip = zipInput.value.trim();

    // Check whether a state was selected
    if (state=== " " ) {
        result.textContent = "Please select a state.";
        return;
    }

    // Check whether the zip code has 5 digits
    if (!/^[0-9]{5}$/.test(zip)) {
        result.textContent = "Please enter a valid 5-digit zip code.";
        return;
    }

    //Get the name of the selected state
    const stateName = stateSelect.options[stateSelect.selectedIndex].text;

    // Display the search result
    result.textContent = " You Selected " + stateName + " with Zip Code: " + zip + ". Civicify's live election lookup is still in early stage development. Check back later!";

});