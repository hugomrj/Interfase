/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package com.itx.execute;

import com.itx.application.compra.Compra;
import com.itx.application.venta_detalle.VentaDetalle;
import nebuleuse.ORM.Conexion;
import nebuleuse.ORM.Persistencia;
import nebuleuse.util.Cadena;
import nebuleuse.util.Datetime;



/**
 * @author hugo
 */

public class Ejecutar {

     public static  void main(String[] args) throws Exception   {

            
         System.out.println( Datetime.castDate("03/02/2003") );
         System.out.println( "" );
         
         System.out.println( Datetime.castDate("2001-02-33") );
        System.out.println( "" );                  
         
        //System.out.println(  Datetime.toSQLDate(Datetime.castDate("2001-02-33") ) ) ;
        //System.out.println(  Datetime.toSQLDate("2001-02-03" ) ) ;
         

        
        
        
       /*
        JasperPrint jasperPrint = JasperFillManager.fillReport("/home/hugo/NetBeansProjects/Interfase/web/Reporte/UsuarioReporte.jasper",
                null,  cnx.getConexion());


         //JasperExportManager.exportReportToPdfFile(jasperPrint, "sample.pdf");
         byte[] bites = JasperExportManager.exportReportToPdf(jasperPrint);
        */




     }

}
