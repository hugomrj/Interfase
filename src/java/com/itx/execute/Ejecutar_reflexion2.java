/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package com.itx.execute;

import com.itx.system.interaccion.Interaccion;
import com.itx.system.modulo.Modulo;

import com.itx.system.usuario.Usuario;
import com.itx.system.usuario.UsuarioDAO;
import com.itx.system.usuario_rol.UsuarioRol;


import java.lang.reflect.Method;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import nebuleuse.ORM.Conexion;
import nebuleuse.ORM.Enlace;
import nebuleuse.ORM.Persistencia;
import nebuleuse.ORM.Secuencia;
import nebuleuse.ORM.Serializacion;



/**
 * @author hugo
 */


public class Ejecutar_reflexion2 {
    
     public static void main(String[] args) throws Exception   {

            Persistencia p = new Persistencia();
            
            UsuarioRol ur = new UsuarioRol();
            
            ur = (UsuarioRol) p.filtrarId(ur, 1);
  
            System.err.println(ur.getUsuario().getCuenta() );
            System.err.println(ur.getRol().getNombre());
            
          
     }                 
}
     





