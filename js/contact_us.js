const selectElement = document.getElementById('adx-service');
const selectContainer = document.getElementById('select-container');
const websiteField = document.getElementById('websiteField');

// Initially, the input field and grid classes are hidden and removed
selectContainer.classList.remove('grid-2', 'gap-16', 'mb_16');
websiteField.classList.remove('show');  // Hide input field by default

// Listen for changes on the select element
selectElement.addEventListener('change', function () {
    // Check if the selected option is "Other Question?"
    if (selectElement.value === "Other") {
        // Add grid classes to show the input beside
        selectContainer.classList.add('grid-2', 'gap-16', 'mb_16');
        
        // Add class to show the input with transition
        websiteField.classList.add('show');
    } else {
        // Remove the grid classes and hide the input
        selectContainer.classList.remove('grid-2', 'gap-16', 'mb_16');
        
        // Remove the 'show' class to hide input with transition
        websiteField.classList.remove('show');
    }
});



