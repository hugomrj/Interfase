/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itx.system.modulo;

import com.itx.system.usuario.Usuario;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import nebuleuse.ORM.Secuencia;

public class ModuloListar {
    
    public List<Modulo> ejecutar (Usuario usuario) 
            throws IOException, Exception {         
        
        Secuencia<Modulo> lista = new Secuencia<Modulo>();         
        List<Modulo> ListaModulos = new ArrayList<Modulo>();       
        
                           
            String strSQL =   " SELECT "
                + " sys_modulos.modulo, sys_modulos.descripcion "
                + " FROM "
                + " sys_modulos, sys_interacciones, "
                + " sys_roles_x_interacciones, sys_roles, "
                + " sys_usuarios_x_roles, usuarios "
                + " WHERE "
                + " sys_modulos.modulo = sys_interacciones.modulo AND "
                + " sys_interacciones.interaccion = sys_roles_x_interacciones.interaccion AND "
                + " sys_roles_x_interacciones.rol = sys_roles.rol AND "
                + " sys_roles.rol = sys_usuarios_x_roles.rol AND "
                + " sys_usuarios_x_roles.usuario = usuarios.usuario "
                + " and usuarios.usuario = " + usuario.getUsuario().toString()
                + " group by   sys_modulos.modulo,  sys_modulos.descripcion "
                + " order by sys_modulos.modulo; " ;

            
        ListaModulos = lista.listaSimpleSQL(new Modulo(), strSQL );                 

        return ListaModulos;
        
    }
    
}
