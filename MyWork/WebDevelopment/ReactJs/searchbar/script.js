// Array of data for suggestions
const items = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Blueberry",
    "Strawberry",
    "Watermelon",
    "Grapes",
    "Peach",
    "Cherry",
    "Pear",
    "Kiwi",
];

// Function to filter suggestions based on input
function filterSuggestions() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const suggestionsList = document.getElementById("suggestionsList");

    // Clear previous suggestions
    suggestionsList.innerHTML = "";

    if (input) {
        // Filter the items based on input
        const filteredItems = items.filter(item =>
            item.toLowerCase().includes(input)
        );

        // Populate the suggestions
        filteredItems.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            li.onclick = () => selectSuggestion(item);
            suggestionsList.appendChild(li);
        });
    }
}

// Function to handle suggestion selection
function selectSuggestion(value) {
    document.getElementById("searchBar").value = value;
    document.getElementById("suggestionsList").innerHTML = "";
}
