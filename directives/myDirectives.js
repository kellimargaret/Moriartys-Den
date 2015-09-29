moriartysDen.directive("currentPage", function() {
  return function(scope, element, attrs) {
    if (attrs.currentPage == attrs.matchPath || attrs.currentPage == "/") {
      element.addClass("active");

    }
  }
});
