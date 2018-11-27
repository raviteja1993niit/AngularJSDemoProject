/**
 * BookCtrl
 */
app.controller('BookCtrl',function($scope){
	//JSON FORMAT
	$scope.book={'isbn':'123',
			     'title':'Introduction to AngularJS',
			     'price':'100',
			     'author':'John'
	            }
	$scope.books=[{'isbn':'1',
		     	   'title':'Introduction to AngularJS',
		           'price':'100',
		           'author':'John'
                 },
                 {'isbn':'2',
  		     	   'title':'Introduction to SpringFramework',
  		           'price':'200',
  		           'author':'smith'
                   },
                   {'isbn':'3',
      		     	'title':'Introduction to HibernateFramework',
      		        'price':'300',
      		        'author':'Adam'
                    },
                    {'isbn':'4',
          		     'title':'Introduction to J2SE',
          		     'price':'400',
          		     'author':'Clara'
                     }]
	$scope.addBook=function(){
		alert('Add Book')
		console.log($scope.bookObj)
		$scope.books.push($scope.bookObj)
		console.log($scope.books)
	}
})