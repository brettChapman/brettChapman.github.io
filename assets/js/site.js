// Small progressive enhancements. Everything still works without JavaScript.
(function () {
  var root = document.documentElement;
  root.classList.remove('no-js');
  root.classList.add('js');

  // Mobile navigation toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Portfolio sub-tabs (Projects / Dashboards / Analyses / Publications)
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab[data-tab]'));
  if (tabs.length) {
    var show = function (id, push) {
      var found = tabs.some(function (t) { return t.dataset.tab === id; });
      if (!found) id = tabs[0].dataset.tab;
      tabs.forEach(function (t) {
        var on = t.dataset.tab === id;
        t.classList.toggle('active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        var panel = document.getElementById(t.dataset.tab);
        if (panel) panel.classList.toggle('active', on);
      });
      if (push && history.replaceState) history.replaceState(null, '', '#' + id);
    };
    tabs.forEach(function (t) {
      t.addEventListener('click', function (e) { e.preventDefault(); show(t.dataset.tab, true); });
    });
    window.addEventListener('hashchange', function () { show(location.hash.slice(1), false); });
    show(location.hash.slice(1), false);
  }

  // Publication filter chips
  var chips = Array.prototype.slice.call(document.querySelectorAll('.chip[data-filter]'));
  if (chips.length) {
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var f = chip.dataset.filter;
        chips.forEach(function (c) { c.classList.toggle('active', c === chip); });
        document.querySelectorAll('#publications .pub').forEach(function (li) {
          var flags = (li.dataset.flags || '').split(' ');
          li.classList.toggle('hidden', flags.indexOf(f) === -1);
        });
        document.querySelectorAll('#publications .year-heading').forEach(function (h) {
          var list = h.nextElementSibling;
          var any = list && list.querySelector('.pub:not(.hidden)');
          h.classList.toggle('empty', !any);
        });
      });
    });
  }

  // Pre-select the contact form topic from ?topic=consulting
  var topic = new URLSearchParams(location.search).get('topic');
  var select = document.getElementById('topic');
  if (topic && select) {
    Array.prototype.forEach.call(select.options, function (o) { if (o.value === topic) select.value = topic; });
  }
})();
