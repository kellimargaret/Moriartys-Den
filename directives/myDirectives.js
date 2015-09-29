moriartysDen.directive("currentPageCheck", function() {

  return function(scope, element, attrs) {
    if (attrs.currentPage == attrs.matchPath || attrs.currentPage == attrs.matchPath2) {
      element.addClass("active");
    } else {
      element.removeClass("active");
    }
  }
});
