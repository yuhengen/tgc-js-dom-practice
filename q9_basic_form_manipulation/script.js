// document.querySelector("#submit").onclick = getFormValues();

document.querySelector("#submit").addEventListener("click", function() {
    getFormValues();
})

function getFormValues() {

    let email = document.querySelector("#email-address").value;

    let phoneModel = document.querySelectorAll(".phone-type");
    let model = null;
    for (let m of phoneModel) {
        if (m.checked) {
            model = m.value;
            break;
        }
    }

    let selectedServices = document.querySelectorAll(".services");
    let services = [];
    for (let s of selectedServices) {
        if (s.checked) {
            services.push(s.value);
        }
    }

    let pickup = document.querySelector("#pick-up").value;
    
    // leave this line alone!
    return [email, model, services, pickup];

}

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = getFormValues;
} catch (e) {}
