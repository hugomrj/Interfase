/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.itx.system.interaccion;

import com.itx.system.modulo.Modulo;
import com.itx.system.usuario.Usuario;
import java.util.ArrayList;
import java.util.List;
import nebuleuse.ORM.Secuencia;

/**
 *
 * @author hugo
 */

public class InteraccionAction {
    

    public List<Interaccion> buscar(Usuario usuario, String StrBuscar) throws Exception {         
                      
            Secuencia<Interaccion> secuencia = new Secuencia<Interaccion>();         
            List<Interaccion> ListaInteracciones = new ArrayList<Interaccion>();         
           
	String strSQL = " SELECT sys_interacciones.interaccion, nombre_interaccion, url "
                        + " FROM sys_interacciones, "
                        + " ( "
                        + "     SELECT interaccion "
                        + "     FROM sys_usuarios_x_roles, sys_roles_x_interacciones "
                        + "     where sys_usuarios_x_roles.rol = sys_roles_x_interacciones.rol "
                        + "     and sys_usuarios_x_roles.usuario =  " + usuario.getUsuario().toString()
                        + " ) as t  "
                        + " WHERE nombre_interaccion iLIKE '%"+StrBuscar.trim()+"%'  "
                        + " and t.interaccion = sys_interacciones.interaccion "
                        + " group by sys_interacciones.interaccion, nombre_interaccion, url ";           
            
                        
            ListaInteracciones = secuencia.listaSimpleSQL(new Interaccion(), strSQL );     
            
            return ListaInteracciones;
            
    }
        
     
    public List<Interaccion> mostrar(Usuario usuario, Modulo modulo) throws Exception {         
                      
            Secuencia<Interaccion> secuencia = new Secuencia<Interaccion>();         
            List<Interaccion> ListaInteracciones = new ArrayList<Interaccion>();         

            String strSQL = " SELECT sys_interacciones.interaccion, nombre_interaccion, url "
                    + " FROM sys_interacciones, "
                    + " ( "
                    + "     SELECT interaccion "
                    + "     FROM sys_usuarios_x_roles, sys_roles_x_interacciones "
                    + "     where sys_usuarios_x_roles.rol = sys_roles_x_interacciones.rol "
                    + "     and sys_usuarios_x_roles.usuario =  " + usuario.getUsuario().toString()
                    + " ) as t "
                    + " WHERE t.interaccion = sys_interacciones.interaccion "
                    + " and sys_interacciones.modulo =  " + modulo.getModulo().toString() 
                    + " group by sys_interacciones.interaccion, nombre_interaccion, url, orden  "
                    + " order by sys_interacciones.orden" ;
            
                                          
            ListaInteracciones = secuencia.listaSimpleSQL(new Interaccion(), strSQL );     
            
            return ListaInteracciones;

    }
   

    
    
}
