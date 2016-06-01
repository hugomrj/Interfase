
/*
 * To change this template, choose Tools | Templates
* and open the template in the editor.
 */
package com.itx.execute;


import com.itx.application.compra.Compra;
import com.itx.application.compra_detalle.CompraDetalle;
import com.itx.application.proveedor.Proveedor;
import com.itx.system.usuario.Usuario;
import com.itx.system.usuario.UsuarioAction;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.http.HttpServletRequest;
import nebuleuse.ORM.Persistencia;


/**
 * @author hugo
 */


public class EjecutarSelect {
    
     public static void main(String[] args) throws Exception  {


            CompraDetalle  instancia = new CompraDetalle();
            Persistencia persistencia = new Persistencia();
            instancia = (CompraDetalle) persistencia.filtrarId(instancia, 38);      
            
            //instancia.getSubTotal();
            

            
            String fecha="2005-10-28";
            SimpleDateFormat sdf= new SimpleDateFormat("yyyy-MM-dd");
            Date date = sdf.parse(fecha); 
            
            

            System.out.println(new SimpleDateFormat("yyyy-MM-dd").format( date ) );


            
         
         } 
          
       
}
     





