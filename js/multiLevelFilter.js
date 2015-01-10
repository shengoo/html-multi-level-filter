angular.module("multiLevelFilterModule",[])
.directive("multiLevelFilter",function(){
    return {
      restrict: "AE",
        scope:{

        },
        controller: function($scope){
            $scope.showing = false;
        },
        link: function(scope, element, attrs){
            var $filter = $('<div class="popover top" ng-class="{ in: isOpen(), fade: animation() }"><div class="arrow"></div> <div class="popover-inner"><h3 class="popover-title">asdfasdf</h3><div class="popover-content">content</div></div></div>');
            function showFilter(){
                console.log(element.position())
                element.after($filter);
                $filter.show();
                var filterTop = element.position().top - $filter.outerHeight();
                console.log(element.position().top,element.outerHeight(),$filter.outerHeight(),filterTop)
                $filter.css("top",filterTop)
                var filterLeft = element.position().left + (element.outerWidth() - $filter.outerWidth())/2;
                console.log(element.position().left,element.outerWidth(),$filter.outerWidth(),filterLeft)
                $filter.css("left",filterLeft)
            }
            function hideFilter(){
                $filter.remove();
            }
            console.log("link")
            element.click(function(){console.log("click")
                if(scope.showing){
                    hideFilter();
                }else{
                    showFilter();
                }
                scope.showing = !scope.showing;
            });
        }
    };
});