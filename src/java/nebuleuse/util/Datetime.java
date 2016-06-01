/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package nebuleuse.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;


/**
 *
 * @author hugo romero
 */
public abstract class  Datetime {    

    
    
    public static String toSQLDate(Date fecha) {   
        
        if (fecha == null) 
        {
            return "";                    
        }
        else 
        {
            java.sql.Date sqlDate = new java.sql.Date(fecha.getTime());
            return sqlDate.toString();        
        }        
    }

    public static String toSQLDate(Object objeto) {
        
        Date fecha = new Date();
        fecha = (Date) objeto;        
        return  toSQLDate(fecha);
        
    }
        
    
    public static Date castDate(String strFecha) throws ParseException{  
        
System.out.println(strFecha);
System.out.println(strFecha.trim().length());

        java.util.Date date = new java.util.Date();
         if (  (strFecha.trim().equals(""))  ||  (strFecha.trim().length() != 10) ) 
         {
            date = null;
         }
         else
         {
             SimpleDateFormat formato = null;             
             if ( Cadena.contChr( strFecha, '/' ) == 2 ){
                formato = new SimpleDateFormat("dd/MM/yyyy");                             
             }
             if ( Cadena.contChr( strFecha, '-' ) == 2 ){
                formato = new SimpleDateFormat("yyyy-MM-dd");   
             }                          
             
             
System.out.println(
             //formato. 
);


             
             date = formato.parse(strFecha);            
         }        
         return date;            
    }    

    
    
    
    public static String toDate() {    
    
        return "valorretorno";        
    }

    
    
    
}





















