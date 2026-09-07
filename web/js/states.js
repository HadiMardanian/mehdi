/* TASK-AUTH-01-03 · Sign-Up field states — plain JS, no dependencies.
   Works via file:// on both sign-up pages (EN + FA, RTL mirror handled by CSS).
   Behaviors:
   - .active  on a [data-field] while its input is focused
   - .has-value on [data-field] once it holds text (label stays floated)
   - password eye button toggles input.type password ↔ text and swaps
     the eye-slash / open-eye sprite. */
(function () {
  'use strict';

  function onReady() {
    var fields = document.querySelectorAll('[data-field]');
    Array.prototype.forEach.call(fields, function (field) {
      var input = field.querySelector('input');
      if (!input) return;

      input.addEventListener('focus', function () {
        field.classList.add('active');
      });
      input.addEventListener('blur', function () {
        field.classList.remove('active');
        if (!input.value) field.classList.remove('has-value');
      });
      input.addEventListener('input', function () {
        field.classList.toggle('has-value', input.value.length > 0);
      });
      /* browser may restore values on reload */
      field.classList.toggle('has-value', input.value.length > 0);

      var eye = field.querySelector('[data-eye]');
      if (eye) {
        eye.addEventListener('click', function () {
          var isText = input.type === 'text';
          input.type = isText ? 'password' : 'text';
          eye.classList.toggle('eye-open', !isText);
          eye.setAttribute('aria-label', isText ? 'Show password' : 'Hide password');
          eye.setAttribute('aria-pressed', isText ? 'false' : 'true');
        });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
})();