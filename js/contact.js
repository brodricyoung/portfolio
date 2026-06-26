const form = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");
const error = document.getElementById("form-error");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { Accept: "application/json" },
        });

        if (response.ok) {
            feedback.style.display = "block";
            error.style.display = "none";
            form.reset();
        } else {
            feedback.style.display = "none";
            error.style.display = "block";
        }
    } catch (err) {
        feedback.style.display = "none";
        error.style.display = "block";
    }
});