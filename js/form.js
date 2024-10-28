function copy_info(checkbox) {
    if (checkbox.checked) {
        document.getElementById('bill-street').value = document.getElementById('street').value;
        document.getElementById('bill-city').value = document.getElementById('city').value;
        document.getElementById('bill-state').value = document.getElementById('state').value;
        document.getElementById('bill-zip').value = document.getElementById('zip').value;
        document.getElementById('bill-country').value = document.getElementById('country').value;
    } else {
        document.getElementById('bill-street').value = '';
        document.getElementById('bill-city').value = '';
        document.getElementById('bill-state').value = '';
        document.getElementById('bill-zip').value = '';
        document.getElementById('bill-country').value = '';
    }
}

function checkemail() {
    var email1 = document.getElementById('email').value;
    var email2 = document.getElementById('email2').value;
    if (email1 !== email2) {
        alert("The two emails must match!");
    } else {
        alert("Thank you for your purchase!");
    }
}
