const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const form = document.getElementById('registerForm');
const registerBtn1 = document.getElementById('registerBtn1');
const registerBtn2 = document.getElementById('registerBtn2');
const registerBtn3 = document.getElementById('registerBtn3');

registerBtn1.addEventListener('click', function () {
    modal.style.display = 'flex';
});

registerBtn2.addEventListener('click', function () {
    modal.style.display = 'flex';
});

registerBtn3.addEventListener('click', function () {
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

window.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var form = document.getElementById('registerForm');
    var modal = document.getElementById('modal');

    if (name === "" || email === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return false;
    }

    alert("Thanks, we received your registration!");
    form.reset();
    modal.style.display = 'none';
    return false;
}
