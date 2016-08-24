/**
 * restrict can be
 *
 * 'A' - only matches attribute name
 * 'E' - only matches element name
 * 'C' - only matches class name
 * 'M' - only matches comment
 *
 * These restrictions can all be combined as needed:
 * 'AEC' - matches either attribute or element or class name
 */


App.directive('myCommentDirective', function () {
    return {
        restrict: 'AE', //here matches either attribute(<span my-comment-directive></span>) or element(<my-comment-directive></my-comment-directive>)
        template: '<h1>Hello i am comment directive.</h1>'
    };
});