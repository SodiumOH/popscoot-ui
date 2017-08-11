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
.filter('percentage', ['$filter', function ($filter) {
  return function (input, decimals) {
    return $filter('number')(input * 100, decimals) + '%';
  };
}])
.filter('bg_css', function(){
	return function(url){
		if(url) {
			var css = {
				"background-image": "url('"+url+"')"
			}
			return css;
		} else {
			return null;
		}
	}
})
.filter('file_size', function(){
	return function(fileSize){
		if(fileSize < 1024){
			return fileSize+"b";
		}else if (fileSize < 1024*1024) {
			return (fileSize/1024).toFixed(2)+"kb";
		} else if (fileSize < 1024*1024*1024) {
			return (fileSize/1024/1024).toFixed(2)+"mb";
		} else if (fileSize < 1024*1024*1024*1024) {
			return (fileSize/1024/1024/1024).toFixed(2)+"gb";
		} else {
			return (fileSize/1024/1024/1024/1024).toFixed(2)+"tb";
		}
	}
})
.filter('booking_status', function(){
	return function(status){
		if (status == 1) {
			return "booked";
		}else if (status == 2) {
			return "traveling";
		}else if (status == 3) {
			return "completed";
		}else if (status == 4){
			return "canceled";
		}else {
			return "error";
		}
	}
})
.filter('status_filter', function(){
	return function(items, status){
		var filtered = [];
		items.forEach(function(item){
			if(status.indexOf(item.status)>-1){
				filtered.push(item);
			}
		})
		return filtered;
	}
})



	
	
	
	
