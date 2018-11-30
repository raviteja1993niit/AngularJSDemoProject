
/**
 * BookService  - Singleton
 * collection of functions - to call REST services using $http
 */
app.factory('BookService',function($http){
	var bookService={}
	
	bookService.getAllBooks=function(){
		//$http.get(url) ->Http Response object with data and status code
		return $http.get("http://localhost:8081/MiddleWareCrudDemo/getallbooks");
	}
	
	bookService.addBook=function(book){
		return $http.post("http://localhost:8081/MiddleWareCrudDemo/addbook",book);
	}
	
	bookService.updateBook=function(){
		
	}
	
	bookService.deleteBook=function(isbn){
		return $http['delete']("http://localhost:8081/MiddleWareCrudDemo/deletebook?isbn="+isbn);
	}
	
	bookService.getBook=function(isbn){
		return $http.get("http://localhost:8081/MiddleWareCrudDemo/getbook?isbn="+isbn);
	}
	
	return bookService
})