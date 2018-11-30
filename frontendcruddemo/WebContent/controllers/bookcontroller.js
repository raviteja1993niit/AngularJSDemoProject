/**
 * BookCtrl
 * BookService is a service object which will get injected
 * Only if you inject, BookServic will get instantiated
 */
app.controller('BookCtrl',function($scope,BookService){
	//This is a statement which will always gets executed
	//BookService.getAllBooks() -> HttpResponse (data,status code)
	// status code  - 200 - 299 (success)
	// status code - 400 - 499 /500 - 599 - (Error)
	//BookService.getAllBooks().then(success,error)
	//books.html page is loaded in the browser, this statement will gets executed
	function getAllBooks(){
	BookService.getAllBooks().then(function(response){
		console.log(response)
		if(response.status==204)//NO CONTENT - In the view , "No Books Found"
			$scope.nobooks="No Books Found"
			else
				$scope.books=response.data  //List<Book> returned from middleware
	},function(response){
		console.log(response.data)
		console.log(response.status)
	})
	}
	getAllBooks()
	//Function in $scope, called from the view
	$scope.addBook=function(book){//book is from view
		BookService.addBook(book).then(function(response){
			alert("Book Details Inserted Successfully.......")
			console.log(response)
			getAllBooks()
			$scope.book={}
		},function(response){
			console.log(response)
			$scope.error=response.data
		}
		)}
	$scope.deleteBook=function(isbn){//book is from view
		BookService.deleteBook(isbn).then(function(response){
			alert("Book Details Deleted Successfully.......")
			console.log(response)
			getAllBooks()
		},function(response){
			console.log(response)
			$scope.error=response.data
		}
		)}
	$scope.getBook=function(isbn){//book is from view
		BookService.getBook(isbn).then(function(response){
			$scope.book=response.data
			console.log(response)
		},function(response){
			console.log(response)
			$scope.error=response.data
		}
		)}
	
	
	
})

