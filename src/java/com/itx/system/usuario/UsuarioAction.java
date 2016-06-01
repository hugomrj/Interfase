/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.itx.system.usuario;

import java.util.logging.Level;
import java.util.logging.Logger;
import nebuleuse.ORM.Persistencia;

/**
 *
 * @author hugo
 */
public class UsuarioAction {
    
    private Usuario usuario = new Usuario();
    private Persistencia persistencia = new Persistencia();
    
    public Usuario filtrar(Integer id){

        try 
        {
            usuario = (Usuario) persistencia.filtrarId(usuario, id);
        } 
        catch (Exception ex) {
            Logger.getLogger(UsuarioAction.class.getName()).log(Level.SEVERE, null, ex);
        }

        return usuario;
        
    }
        
    
}
