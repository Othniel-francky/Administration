function toggleClassName(el, className) {
    if (el.hasClass(className)) {
      el.removeClass(className);
    } else {
      el.addClass(className);
    }
  }
  
  // Open the side nav on click
  menuIconEl.on('click', function() {
    toggleClassName(sidenavEl, 'active');
  });
  
  // Close the side nav on click
  sidenavCloseEl.on('click', function() {
    toggleClassName(sidenavEl, 'active');
  });