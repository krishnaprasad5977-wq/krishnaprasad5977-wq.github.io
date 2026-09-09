/* InfraKraft shared components — nav, footer, floating WA button, scroll reveal */
(function () {
  var WA = '918148656971';
  var WA_SVG16 = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';
  var WA_SVG22 = '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.853L0 24l6.303-1.654A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.031-1.388l-.36-.214-3.742.981.999-3.648-.235-.374A9.808 9.808 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>';

  var NAV_LINKS = [
    { href: 'services.html', label: 'Services', id: 'services' },
    { href: 'index.html#work', label: 'Work', id: 'work' },
    { href: 'pricing.html', label: 'Pricing', id: 'pricing' },
    { href: 'services.html#tutoring', label: 'Tutoring', id: 'tutoring' },
    { href: 'blog.html', label: 'Blog', id: 'blog' },
    { href: 'contact.html', label: 'Contact', id: 'contact' },
  ];

  function activePage() {
    var p = (location.pathname.split('/').pop() || 'index.html').replace('.html', '');
    return p === '' ? 'index' : p;
  }

  function renderNav() {
    var active = activePage();
    var liHTML = NAV_LINKS.map(function (l) {
      var cls = (l.id === active) ? ' class="nav-active"' : '';
      return '<li><a href="' + l.href + '"' + cls + '>' + l.label + '</a></li>';
    }).join('');
    return '<nav class="nav"><div class="nav-inner">' +
      '<a href="index.html" class="nav-logo">Infra<span>Kraft</span></a>' +
      '<ul class="nav-links" id="nav-menu">' + liHTML + '</ul>' +
      '<a href="https://wa.me/' + WA + '" class="btn btn-whatsapp nav-cta" target="_blank" rel="noopener">' +
      WA_SVG16 + ' Chat on WhatsApp</a>' +
      '<button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle menu" aria-expanded="false">' +
      '<span></span><span></span><span></span></button>' +
      '</div></nav>';
  }

  function renderFooter() {
    return '<footer class="footer"><div class="footer-inner">' +
      '<div class="footer-logo">Infra<span>Kraft</span></div>' +
      '<div class="footer-links">' +
      '<a href="services.html">Services</a>' +
      '<a href="pricing.html">Pricing</a>' +
      '<a href="blog.html">Blog</a>' +
      '<a href="contact.html">Contact</a>' +
      '<a href="https://wa.me/' + WA + '" target="_blank" rel="noopener">WhatsApp</a>' +
      '<a href="https://www.linkedin.com/in/krishna-prasad-15b555375" target="_blank" rel="noopener">LinkedIn</a>' +
      '</div>' +
      '<div class="footer-copy">© InfraKraft · Bangalore / Chennai</div>' +
      '</div></footer>';
  }

  function renderWAFloat() {
    return '<a href="https://wa.me/' + WA + '?text=Hi%20Krishna%2C%20I%20found%20InfraKraft%20and%20I%27d%20like%20to%20know%20more%20about%20your%20services." class="wa-float" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">' +
      WA_SVG22 + '<span>Chat on WhatsApp</span></a>';
  }

  function initReveal() {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(function (el) { ro.observe(el); });

    var ho = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          ho.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });
    document.querySelectorAll('.section-label, .section-title, .section-sub').forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      ho.observe(el);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var nr = document.getElementById('nav-root');
    if (nr) nr.outerHTML = renderNav();

    var fr = document.getElementById('footer-root');
    if (fr) fr.outerHTML = renderFooter();

    document.body.insertAdjacentHTML('beforeend', renderWAFloat());

    var hbtn = document.getElementById('nav-hamburger');
    var nmenu = document.getElementById('nav-menu');
    if (hbtn && nmenu) {
      hbtn.addEventListener('click', function () {
        var open = nmenu.classList.toggle('open');
        hbtn.classList.toggle('open', open);
        hbtn.setAttribute('aria-expanded', open);
      });
      document.addEventListener('click', function (e) {
        if (!hbtn.contains(e.target) && !nmenu.contains(e.target)) {
          nmenu.classList.remove('open');
          hbtn.classList.remove('open');
          hbtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    initReveal();
  });
})();
