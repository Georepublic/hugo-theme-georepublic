// Custom Javascript for theme

(function () {
  'use strict'

  /*
   * JavaScript for disabling form submissions if there are invalid fields
   */

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {

        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')

      }, false)
    })

  /*
   * JavaScript for reading form submission information from URL parameters
   */
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.has('email')) {
    const tag = document.getElementById("your-email");
    tag.textContent = urlParams.get('email');
  }

})()
