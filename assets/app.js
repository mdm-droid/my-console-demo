/* Keystone Console — demo login behaviour
   NOTE: This is a front-end-only demo. No real authentication occurs.
   The "passkey" flow is fully simulated and never contacts an authenticator. */

(function () {
  'use strict';

  function go() {
    window.location.href = 'dashboard.html';
  }

  function runPasskey() {
    var overlay = document.getElementById('passkeyOverlay');
    var ring = document.getElementById('bioRing');
    var title = document.getElementById('pkTitle');
    var msg = document.getElementById('pkMsg');
    if (!overlay) { go(); return; }

    overlay.classList.add('show');

    // Phase 1: "verifying" (spinner)
    setTimeout(function () {
      // Phase 2: verified (check mark)
      ring.classList.add('done');
      ring.innerHTML =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" ' +
        'stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>';
      title.textContent = 'Passkey verified';
      msg.textContent = 'Signing you in…';
    }, 1500);

    // Phase 3: redirect
    setTimeout(go, 2300);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('passkeyBtn');
    if (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        runPasskey();
      });
    }

    // Allow Enter on the (decorative) username field to trigger the passkey too
    var form = document.getElementById('loginForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runPasskey();
      });
    }
  });
})();
