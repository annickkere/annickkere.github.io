// Making Our Form dynamic

// Our Main Functions
// To validate Lastname
function validateLastname(nom){
    if (nom.trim().length < 2) {
        throw new Error("Le nom est trop court !")
    }    
}

// To validate Firstname
function validateFirstname(prenom){
    if (prenom.trim().length < 2) {
        throw new Error("Le prénom est trop court !")
    }    
}

// To validate Subject
function validateSubject(sujet){
    if (sujet.trim().length < 3) {
        throw new Error("Le sujet est trop court !")
    }    
}

// To validate Email
function validerEmail(email){
    let emailRegExp = new RegExp("[a-z0-99._-]+@[a-z._-]+\\.[a-z._-]+")
    if (!emailRegExp.test(email)) {
        throw new Error("L'email n'est pas valide !")
    }
}

// Display an error message
function displayErrorMessage(message) {
    let spanError = document.getElementById("errorMessage")
    let divErrorMessage = document.querySelector(".divError")
    if (!spanError) {
        spanError = document.createElement("span")
        spanError.id = "errorMessage"
        divErrorMessage.append(spanError)
    }    
    spanError.innerText = message
}

// To Manage form
function manageForm(){
    let formTitle = document.querySelector(".formTitle")
    try {
        // We get all input tags and their values
        //  Get Lastname Tag
        let lastNameTag = document.getElementById("nom")
        let nom = lastNameTag.value
        // Check its value
        validateLastname(nom)

        // Get Firstname Tag
        let firstNameTag = document.getElementById("prenom")
        let prenom = firstNameTag.value
        // Check its value
        validateFirstname(prenom)

        // Get Email Tag
        let emailTag = document.getElementById("email")
        let email = emailTag.value
        // Check its value
        validerEmail(email)

        // Get Subject Tag
        let subjectTag = document.getElementById("sujet")
        let sujet = subjectTag.value
        // Check its value
        validateSubject(sujet)
        // Return True when every input is valid
        return true
    } catch (error) {
        formTitle.classList.add("hideForm")
        displayErrorMessage(error.message)
    }
    
}

// Get Form Tag
let formTag = document.querySelector("form")
// Add Event Listener when form is submitted
formTag.addEventListener("submit", (event) => {
    // Block Default Behavior
    event.preventDefault();

    // Manage Input Validation
    manageForm()
    let nom = document.getElementById("nom").value
    let toThank = `
                    <h1>Merci <span>${nom}</span> !</h1>
                  `
    let section = document.querySelector("#formSection")

    // To display thanking message
    if (manageForm()) {
        formTag.classList.add("hideForm")
        section.classList.add("thank")
        section.innerHTML = toThank
    }
});



















