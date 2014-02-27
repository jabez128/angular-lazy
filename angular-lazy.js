;(function(window,angular,undefined){
	angular.module('angularLazy',[])
			   .directive('lazy',function(){
				return {
				restrict :'A',
				link: function(scope,elem,attrs){
					var top = $(elem).offset().top;
					$(window).on('scroll',function(){
					if($(this).scrollTop() + $(window).height() > top){
							$(elem).attr('src',attrs.lazy);
					}			
					});
					}
				}
			   })
})(window,window.angular);