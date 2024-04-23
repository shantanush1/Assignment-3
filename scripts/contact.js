/* YOUR NAME: shantanu sharma
* ID:000806689
* instructor name : Hamdy Ibrahim 
* Assignment - 3 using js and deploying website*/

// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const formArea = document.getElementById("contact-page");
formArea.addEventListener("click", submit);

function submit() {
    formArea.innerHTML = '<p>Thank you for your message</p>';
    formArea.classList.add("large-text");
}
