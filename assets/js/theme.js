// Custom Javascript for theme

(function () {
  'use strict'

  /*
   * Apply Bootstrap styles to elements to look properly in Markdown
   */
  const tables = document.querySelectorAll('table')
  Array.prototype.slice.call(tables)
    .forEach(function (table) {
      table.className = 'table table-hover'
    })

  const blockquotes = document.querySelectorAll('blockquote')
  Array.prototype.slice.call(blockquotes)
    .forEach(function (blockquote) {
      blockquote.className = 'border-start border-5 bg-light bg-gradient p-2'
    })

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
  const urlParams = new URLSearchParams(window.location.search)

  if ( urlParams.has('email') && document.getElementById("your-email") ) {
    const tag = document.getElementById("your-email")
    tag.textContent = urlParams.get('email')
  }

  if (urlParams.has('email') && document.getElementById("email") ) {
    document.getElementById("email").value = urlParams.get('email')
  }


  /*
   * JavaScript to pass parameter(s) to the next form page
   */
  const form = document.getElementById('next-step')

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault()

      const params = new URLSearchParams({
        email: form.querySelector('input[type="email"]').value
      })

      window.location.replace(form.action + "?" + params.toString())
      return false;
    })
  }

  (function(d,t) {
    var TOKEN = document.getElementById("chatbotToken").value;
    if (TOKEN != "unset") {
      var BASE_URL = document.getElementById("chatbotUrl").value;
      var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src=BASE_URL+"/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g,s);
      g.onload=function(){
        window.chatwootSettings = {
          hideMessageBubble: false,
          position: 'left',
          locale: document.getElementById("chatbotLocale").value,
          type: 'expanded_bubble',
          showPopoutButton: false,
        };
        window.chatwootSDK.run({
          websiteToken: TOKEN,
          baseUrl: BASE_URL
        })
      }
    }
  })(document,"script");

})()
