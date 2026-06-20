var users = [
    {
        name: "John",
        gender: "male",
        image: "../images/john.png"
    },
    {
        name: "Jane ",
        gender: "female",
        image: "../images/jane.png"
    }
];

var curId = 0;

function toggle() {
    // Toggle curId from 0 -> 1 and 1 -> 0
    curId = (curId + 1) % 2;

    // Get current user
    var user = users[curId];

    // Update image
    document.getElementById("user-img").src = user.image;

    // Update name and gender
    document.getElementById("user-name").innerText = user.name;
    document.getElementById("user-gender").innerText = user.gender;
}