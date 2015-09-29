moriartysDen.directive("currentPageCheck", function() {
  return function(scope, element, attrs) {
    if (attrs.currentPage == attrs.matchPath || attrs.currentPage == attrs.matchPath2) {
      element.addClass("active");
    } else {
      element.removeClass("active");
    }
  }
});

moriartysDen.directive("buttonHover", function() {
  return function(scope, element) {
    element.bind("mouseenter", function() {
      element.toggleClass("hover-button");
    });
    element.bind("mouseleave", function() {
      element.toggleClass("hover-button");
    });
  }
});

moriartysDen.directive("jobHover", function() {
  return function(scope, element) {
    element.bind("mouseenter", function() {
      element.toggleClass("job-hover");
    });
    element.bind("mouseleave", function() {
      element.toggleClass("job-hover");
    });
  }
});
