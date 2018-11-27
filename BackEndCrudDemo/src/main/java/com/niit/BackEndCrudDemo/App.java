package com.niit.BackEndCrudDemo;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.niit.configuration.DBConfiguration;
import com.niit.dao.BookDao;
import com.niit.daoimpl.BookDaoImpl;



/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	 ApplicationContext context=new AnnotationConfigApplicationContext(DBConfiguration.class);
    	      System.out.println( "Hello World!" );
    }
   
	 //BookDao BookDao=(BookDao)context.getBean(BookDaoImpl);

}
   
