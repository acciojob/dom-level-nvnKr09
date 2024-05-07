//your JS code here. If required.
const targetElement = document.getElementById('level');

    if (targetElement) {
        // Initialize a counter for DOM level
        let domLevel = 1;
        
        // Traverse up the DOM tree until reaching the root html element
        let currentElement = targetElement;
        while (currentElement !== null && currentElement.tagName !== 'HTML') {
            // Move to the parent element
            currentElement = currentElement.parentElement;
            // Increment the DOM level counter
            domLevel++;
        }

        // Display the DOM level using alert
        alert(`The level of the element is: ${domLevel}`);
    } else {
        // Handle case where target element is not found
        alert('Element with id "level" not found');
    }