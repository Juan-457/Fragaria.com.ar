/* Fragaria: current GA4 stays direct; previous GA4 and Meta are managed by GTM. */
(function () {
  'use strict';
  if (window.fragariaTrackingInitialized) return;
  window.fragariaTrackingInitialized = true;

  var currentProperty = 'G-ZKQ3P02MDB';
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', currentProperty);

  var googleTag = document.createElement('script');
  googleTag.async = true;
  googleTag.src = 'https://www.googletagmanager.com/gtag/js?id=' + currentProperty;
  document.head.appendChild(googleTag);

  // Delegation also covers WhatsApp links rendered later by the presence map.
  document.addEventListener('click', function (event) {
    var target = event.target;
    if (!(target instanceof Element)) return;
    var link = target.closest('a[href]');
    if (!link) return;
    var destination;
    try { destination = new URL(link.href); } catch (_) { return; }
    if (destination.hostname !== 'wa.me') return;

    window.gtag('event', 'whatsapp_click_contact', {
      send_to: currentProperty,
      link_text: (link.textContent || '').trim().slice(0, 120),
      link_url: link.href
    });
  });
})();
