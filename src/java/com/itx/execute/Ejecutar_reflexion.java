/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package com.itx.execute;


import com.itx.system.usuario.Usuario;
import com.itx.system.usuario_rol.UsuarioRol;


import java.lang.reflect.Method;
import nebuleuse.ORM.Persistencia;



/**
 *
 * @author hugo
 */


public class Ejecutar_reflexion {
    
     public static void main(String[] args) throws Exception   {

         
            Persistencia p = new Persistencia();
            Usuario u = new Usuario();
            u = (Usuario) p.filtrarId(u, 1);

                    
            UsuarioRol ur = new UsuarioRol();
            ur.setId(890);
            
            
            Object instanciaObjeto = null ;
            Class claseObjeto = Class.forName( UsuarioRol.class.getName()  );                     
            instanciaObjeto = claseObjeto.newInstance();   
                     
            
                Method metodoSet = null;
                metodoSet = instanciaObjeto.getClass().getMethod("setUsuario"  , Usuario.class );                   
                     
                metodoSet.invoke(instanciaObjeto,u); 
            
                ur = (UsuarioRol) instanciaObjeto;
  
          System.err.println(ur.getUsuario().getCuenta() );
          System.err.println( instanciaObjeto.getClass().getMethod("getUsuario").getClass() );
          System.err.println("end");
                  
          
          ur = (UsuarioRol) p.filtrarId(ur,1);
          
     }                 
}
     





