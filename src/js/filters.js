angular.module('app.filters', [])

.filter('text_fmt', function() {
	return function(input, opt) {
		switch(opt) {
			case 0:
				return input.toLowerCase();
			case 1:
				return input.replace(/\w\S*/g, function(txt){
					return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
				});
			case 2:
				return input.toUpperCase();
			default:
				return input;
		}
	}
})

.filter('nospace', function () {
    return function (value) {
        return (!value) ? '' : value.replace(/ /g, '');
    };
})
.filter('rd', function(){
	return function(value, opt){
		switch(opt){
			case 0:
				return moment(value).format("YYYY MMM DD");
			case 1:
				return moment(value).format("YYYY MMM DD hh:mm");
			case 2:
				return moment(value).format("hh:mm");
			default:
				return moment(value).format("YYYY MMM DD");
		}
		return 
	}
})
.filter('paginate', function(){
	return function(array, pageNumber, itemsPerPage){
		var begin = ((pageNumber - 1) * itemsPerPage);
		var end = begin + itemsPerPage;
		return array.slice(begin, end);
	};
})



	
	
	
	
