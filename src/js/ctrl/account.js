angular.module('app.account.ctrl', [])

.controller('AccountCtrl', function($timeout, $mdDialog, $location, $routeParams, $scope, httpService, configuration, $mdToast) {
	console.log('this is AccountCtrl');
	$scope.itemsOrder;
	$scope.search;
	$scope.path = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/app/";	
	var accountId = $routeParams.id;
	$scope.$emit('BC', 
	{
		name: "Account",
		url: "accounts/"+accountId
	});

	$scope.isEdit = false;
	var domain = configuration.domain();
	$scope.url = {
		account: domain + "/service/accounts/" + accountId,
		bookings: domain + "/service/accounts/" + accountId + "/bookings",
		banks: domain + "/service/accounts/" + accountId + "/banks",
		enquiries: domain + "/service/accounts/" + accountId + "/enquiries",
		promotions: domain + "/service/accounts/" + accountId + "/promotions",
		shareLogs: domain + "/service/accounts/" + accountId + "/shareLogs",
		pushTokens: domain + "/service/accounts/" + accountId + "/pushTokens",
		transactions: domain + "/service/accounts/" + accountId + "/transactions",
		payments: domain + "/service/accounts/" + accountId + "/payments",
		upload: domain+"/service/file/upload",
		applyPromotion: domain+"/api/promotion/apply"
	};

	//hovers
	


	$scope.init_form = {};
	$scope.account = {};
	$scope.bookings = [];
	$scope.banks = [];
	$scope.transactions = [];
	$scope.promotions = [];
	$scope.shareLogs = [];
	$scope.payments = [];
	$scope.pushTokens = [];
	$scope.enquiries = [];
	$scope.hasBank = false;



	function getAccount() {
		httpService.httpGet($scope.url.account, 'GET_ACCOUNT');
	}

	$scope.$on("GET_ACCOUNT", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.account = data.data.data.data;
			initForm();
		} else {
			console.log(data.data.data.message);
		}
		/*return new Promise(function(resolve, reject){
			if (typeof($scope.account) === "object") {	
				resolve();
			} else {
				reject();
			}
		})*/
	});

	function getBookings() {
		httpService.httpGet($scope.url.bookings, 'GET_BOOKINGS');
	}

	$scope.$on("GET_BOOKINGS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.bookings = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});

	function getBanks() {
		httpService.httpGet($scope.url.banks, 'GET_BANKS');
	}

	$scope.$on("GET_BANKS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.banks = data.data.data.data;
			if(typeof($scope.banks[0]) === 'object'){
				$scope.hasBank = true;
			}
		} else {
			console.log(data.data.data.message);
		}
	});

	function getPromotions() {
		httpService.httpGet($scope.url.promotions, 'GET_PROMOTIONS');
	}

	$scope.$on("GET_PROMOTIONS", function(event, data){
		if(data.data.data.status == 1) {
			/*console.log("test", data);*/
			console.log(data.data.data.data.appliedPromotions);
			$scope.promotions = data.data.data.data.appliedPromotions;
			$scope.apromotions = data.data.data.data.availablePromotions;
			$scope.$emit("GETFINISHED");
		} else {
			console.log(data.data.data.message);
		}
	});

	function getShareLogs() {
		httpService.httpGet($scope.url.shareLogs, 'GET_SHARELOGS');
	}

	$scope.$on("GET_SHARELOGS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.shareLogs = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});

	function getTransactions() {
		httpService.httpGet($scope.url.transactions, 'GET_TRANSACTIONS');
	}

	$scope.$on("GET_TRANSACTIONS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.transactions = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});

	function getPushTokens() {
		httpService.httpGet($scope.url.pushTokens, 'GET_PUSHTOKENS');
	}

	$scope.$on("GET_PUSHTOKENS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.pushTokens = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});

	function getPayments() {
		httpService.httpGet($scope.url.payments, 'GET_PAYMENTS');
	}

	$scope.$on("GET_PAYMENTS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.payments = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});

	function getEnquiries() {
		httpService.httpGet($scope.url.enquiries, 'GET_ENQUIRIES');
	}

	$scope.$on("GET_ENQUIRIES", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.enquiries = data.data.data.data;
		} else {
			console.log(data.data.data.message);
		}
	});


	//fileUpload without dialog
	$scope.$watch('files', function () {
		$scope.upload($scope.files);
	});
	$scope.$watch('file', function () {
		if ($scope.file != null) {
			$scope.files = [$scope.file]; 
		}
	});

	var mediaId = $scope.account.mediaId;
	$scope.uploadImage = false;
	$scope.uploadPrompt = function(){
		$scope.uploadImage = !$scope.uploadImage;
	}
	$scope.preview = false;
	$scope.upload = function (files) {
		if (files && files.length) {
			var fileReader = new FileReader();
			fileReader.readAsDataURL(files[0]);
			fileReader.onload = function (e) {
				$scope.dataUrl = e.target.result;
				var uploadForm = {
					"files": [{
						name: name,
						type: "image/*",
						size: files[0].size,
						data: $scope.dataUrl
					}],
					"folder": "/popscoot"
				}
				console.log(uploadForm);
				httpService.httpPost($scope.url.upload, uploadForm, 'UPLOAD_IMAGE');
				$scope.uploadStatus = "Uploading...";
				$scope.$on("UPLOAD_IMAGE", function(event, data){
					if(data.data.data.status == 1) {
						console.log(data.data.data.data);
						$scope.media = data.data.data.data[0].data;
						$scope.uploadStatus = "Success";
						$scope.preview = true;
						mediaId = $scope.media.mediaId;
						$mdToast.show(
							$mdToast.simple()
							.textContent("Click on update button to update")
							.hideDelay(3000)
							.position("top right")
							);
					} else {
						console.log(data.data.data.message);
						$scope.uploadStatus = "Failed..."+data.data.data.message;
						$mdToast.show(
							$mdToast.simple()
							.textContent(data.data.data.message)
							.hideDelay(3000)
							.position("top right")
							.theme('error-toast')
							);

					}
				});
			};
			
			
		}
	};
	

	$scope.promoDialog = function(even) {
		
		
		$mdDialog.show({
			locals: {localPro: $scope.apromotions},
			controller: DialogController1,
			templateUrl: 'templates/promotionPicker.tmpl.html',
			parent: angular.element(document.body),
			targetEvent: even,
			clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
  })
		.then(function(answer) {
			updateForm = {
				accountId: $scope.account.accountId,
				promotionId: answer.promotionId
			}
			console.log(updateForm);
			httpService.httpPost($scope.url.applyPromotion, updateForm ,'APPLY_PROMOTION');
			$scope.$on("APPLY_PROMOTION", function(event, data){
				console.log(data);
				if(data.status == 1) {
					console.log(data.data.data);
					$scope.promotions.push(answer);
					getPromotions();
					$mdToast.show(
						$mdToast.simple()
						.textContent("Success")
						.hideDelay(3000)
						.position("top right")
						);

				} else {
					console.log(data.data.message);
					$mdToast.show(
						$mdToast.simple()
						.textContent(data.data.message)
						.hideDelay(3000)
						.position("top right")
						.theme('error-toast')
						);

				}
			})
		}, function() {
			$scope.status = 'You cancelled the dialog.';
		});
	};
	
	function DialogController1($scope, $mdDialog, Upload, httpService, localPro) {
		$scope.promotions = localPro;
		console.log("bitch");
		console.log($scope.promotions);

		$scope.itemsOrder = "active";
		$scope.reverse = true;
		$scope.order = function(){
			$scope.reverse = !$scope.reverse;
		}
		$scope.currentPageNumber = 1;
		$scope.itemsPerPage = 10;
		$scope.search;
		$scope.getNumberOfPages = function() {
			var count = $scope.accounts.length / $scope.itemsPerPage;
			if(($scope.accounts.length % $scope.itemsPerPage) > 0) count++;
			return Math.floor(count);
		}

		$scope.pageDown = function()
		{
			if($scope.currentPageNumber > 1) $scope.currentPageNumber--;
		}

		$scope.pageUp = function()
		{
			if($scope.currentPageNumber < $scope.getNumberOfPages()) $scope.currentPageNumber++;
		}

		
		
		//test end
		$scope.hide = function() {
			$mdDialog.hide();
		};

		$scope.cancel = function() {
			$mdDialog.cancel();
		};

		$scope.answer = function(answer) {
			$mdDialog.hide(answer);
		};
	}


	$scope.updateAccount = function(){
		var updateForm = {
			accountId: $scope.init_form.accountId,
			birthday: moment($scope.account.birthday).format("YYYY-MM-DDTHH:MM:SSZ"),
			mediaId: mediaId
		}
		console.log(updateForm);
		httpService.httpPut($scope.url.account, updateForm, 'UPDATE_ACCOUNT');
	}
	$scope.$on('UPDATE_ACCOUNT', function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.account = data.data.data.data;
			$scope.uploadImage = false;
			$scope.preview = false;
			$mdToast.show(
				$mdToast.simple()
				.textContent("Success")
				.hideDelay(3000)
				.position("top right")
				);
		} else {
			console.log(data.data.data.message);
			$mdToast.show(
				$mdToast.simple()
				.textContent(data.data.data.message)
				.hideDelay(3000)
				.position("top right")
				.theme("error-toast")
				);
		}
	})

	

	function initForm() {
		if (typeof($scope.account) === "object") {
			$scope.isEdit = true; 
		} 
		$scope.init_form= {
			accountId: $scope.isEdit ? $scope.account.accountId : "",
			username: $scope.isEdit ? $scope.account.username : "",
			birthday: $scope.isEdit ? $scope.account.birthday : "",
			type: $scope.isEdit ? $scope.account.type : "",
			socialMedia: $scope.isEdit ? $scope.account.socialMedia : "",
			email: $scope.isEdit ? $scope.account.email : "",
			active: $scope.isEdit ? $scope.account.active : "",
			password : ""
		}
	}

	$scope.getActive = function (acc){
		if (acc.active) {
			return 'activated'
		} else {
			return 'deactivated'
		}
	}
	$scope.path = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/app/";
	
	//deletion related
	deleteAccount = function(){
		httpService.httpDelete($scope.url.account, 'DELETE_ACCOUNT');
	}

	$scope.$on("DELETE_ACCOUNT", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$location.path("/accounts");
	/*		window.location.href = $scope.path + "index.html#/accounts";*/
			$mdToast.show(
				$mdToast.simple()
				.textContent("Success")
				.hideDelay(3000)
				.position("top right")
				);
		} else {
			console.log(data.data.data.message);
			$mdToast.show(
				$mdToast.simple()
				.textContent(data.data.data.message)
				.hideDelay(3000)
				.position("top right")
				.theme('error-toast')
				);
		}
	});



	//upload with dialog
	var updateUrl = $scope.url.account;
	$scope.customFullscreen = false;
	
	$scope.showPrompt = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.prompt()
    .title('Confirm Deletion')
    .textContent('Please key in the username of the Account to delete')
    .placeholder('username')
    .ariaLabel('username')
    .targetEvent(ev)
    .ok('Confirm')
    .cancel('Cancel');

    $mdDialog.show(confirm).then(function(result) {
    	if (result == $scope.account.username) {
    		deleteAccount();  
    	} else {

    		$scope.status = 'Username Mismatch';
    	}
    	
    }, function() {
    	$scope.status = 'Action canceled';
    });
};


//file upload

	// init
	
	getAccount();
	getBookings();
	getBanks();
	getEnquiries();
	getPayments();
	getPushTokens();
	getShareLogs();
	getTransactions();
	getPromotions();	
	
})

.controller('AccountsCtrl', function($mdMedia, $scope, $location, httpService, $timeout, configuration) {
	console.log('this is AccountsCtrl');
	$scope.$emit('BC', {
		name: "Accounts",
		url: "accounts"
	});
	$scope.path = "#/accounts/";
	// var path = $location.path();
	// $scope.goPage = function(path){
	// 	$location.path(path);
	// }

	
	$scope.accounts = [];

	var domain = configuration.domain();
	$scope.url = {
		accounts: domain + "/service/accounts"
	};

	$scope.url = $scope.url.accounts;

	httpService.httpGet($scope.url, 'GET_ACCOUNTS');

	$scope.$on("GET_ACCOUNTS", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.accounts = data.data.data.data;
			$scope.$emit("GETFINISHED");
		} else {
			console.log(data.data.data.message);
			$scope.$emit("GETFINISHED")
		}
	});

    //dynamic loading start
    // In this example, we set up our model using a class.
        // Using a plain object works too. All that matters
        // is that we implement getItemAtIndex and getLength.
        $scope.DynamicItems = function() {
          /**
           * @type {!Object<?Array>} Data pages, keyed by page number (0-index).
           */
           this.loadedPages = {};

           /** @type {number} Total number of items. */
           this.numItems = 0;

           /** @const {number} Number of items to fetch per request. */
           this.PAGE_SIZE = 10;

           this.fetchNumItems_();
       };

        // Required.
        $scope.DynamicItems.prototype.getItemAtIndex = function(index) {
        	var pageNumber = Math.floor(index / this.PAGE_SIZE);
        	var page = this.loadedPages[pageNumber];

        	if (page) {
        		return page[index % this.PAGE_SIZE];
        	} else if (page !== null) {
        		this.fetchPage_(pageNumber);
        	}
        };

        // Required.
        $scope.DynamicItems.prototype.getLength = function() {
        	return this.numItems;
        };

        $scope.DynamicItems.prototype.fetchPage_ = function(pageNumber) {
          // Set the page to null so we know it is already being fetched.
          this.loadedPages[pageNumber] = null;

          // For demo purposes, we simulate loading more items with a timed
          // promise. In real code, this function would likely contain an
          // $http request.
          $timeout(angular.noop, 300).then(angular.bind(this, function() {
          	this.loadedPages[pageNumber] = [];
          	var pageOffset = pageNumber * this.PAGE_SIZE;
          	for (var i = pageOffset; i < pageOffset + this.PAGE_SIZE; i++) {
          		this.loadedPages[pageNumber].push(i);
          	}
          }));
      };

      $scope.DynamicItems.prototype.fetchNumItems_ = function() {
          // For demo purposes, we simulate loading the item count with a timed
          // promise. In real code, this function would likely contain an
          // $http request.
          $timeout(angular.noop, 300).then(angular.bind(this, function() {
          	this.numItems = 50000;
          }));
      };

      $scope.dynamicItems = new $scope.DynamicItems();

    //dynamic loading end
    
    //orderfilter
    


   /*
    $scope.itemsPerRow;
    if ($mdMedia('gt-md')) {
    	$scope.itemsPerRow = 3;
    } else if ($mdMedia('gt-xs')) {
    	$scope.itemsPerRow = 2;
    } else {
    	$scope.itemsPerRow = 1;
    }
    $scope.row = 4;*/

    //orderBy start
    $scope.itemsOrder = "active";
    $scope.reverse = true;
    $scope.order = function(){
    	$scope.reverse = !$scope.reverse;
    }

     //pagination start
     $scope.currentPageNumber = 1;
     $scope.itemsPerPage = 10;

     $scope.getNumberOfPages = function() {
     	var count = $scope.accounts.length / $scope.itemsPerPage;
     	if(($scope.accounts.length % $scope.itemsPerPage) > 0) count++;
     	return Math.floor(count);
     }

     $scope.pageDown = function()
     {
     	if($scope.currentPageNumber > 1) $scope.currentPageNumber--;
     }

     $scope.pageUp = function()
     {
     	if($scope.currentPageNumber < $scope.getNumberOfPages()) $scope.currentPageNumber++;
     }
    //pagination end

    

    $scope.getActive = function (acc){
    	if (acc.active) {
    		return 'ACTIVATED'
    	} else {
    		return 'DEACTIVATED'
    	}
    }
})

.controller("NewAccountCtrl", function($scope, httpService, configuration, $location, $mdToast){

	var domain = configuration.domain();
	$scope.url = {
		account: domain + "/service/accounts/"
	};
	console.log("this is NewAccountCtrl");
	$scope.$emit('BC', {
		name: "createAccount",
		url: "/new/account"
	})
	$scope.account;
	$scope.createAccount = function(){
		var createForm = {
			username: $scope.account.username,
			email: $scope.account.email,
			password: $scope.account.password
		}
		console.log(createForm);
		httpService.httpPost($scope.url.account, createForm, 'CREATE_ACCOUNT');
	}
	$scope.$on("CREATE_ACCOUNT", function(event, data){
		if(data.data.data.status == 1) {
			console.log(data.data.data.data);
			$scope.account = data.data.data.data;
			$location.path("/accounts/" + $scope.account.accountId);	
			/*window.location.href = "#accounts/" + $scope.account.accountId*/
			$mdToast.show(
				$mdToast.simple()
				.textContent("Success")
				.hideDelay(3000)
				.position("top right")
				);
		} else {
			console.log(data.data.data.message);
			$mdToast.show(
				$mdToast.simple()
				.textContent(data.data.data.message)
				.hideDelay(3000)
				.position("top right")
				.theme('error-toast')
				);
		}
	})
})