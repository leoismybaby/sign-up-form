let password = document.getElementById('password')
let confirmPassword = document.getElementById('confirm')

confirmPassword.addEventListener('input', function(e) {
    console.log(e.target)
    console.log(password, confirmPassword)
    // verifyPassword(password,confirmPassword)
})

// function verifyPassword(password, confirmPassword) {
//     if (password != confirmPassword) {
//         password.setCustomValidity("Passwords do not match!")
//     }
// }