moriartysDen.directive("currentPage", function() {
  return function(scope, element) {
    element.addClass("active");
  }
});
