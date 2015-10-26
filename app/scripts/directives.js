  app.directive('hello', [function () {
  return {
    restrict: 'A', // C: class, E: element, M: comments, A: attributes
    replace: true, // replaces original content with template
    template: '<span><br>Hello Directive</span>'
  }
}]);