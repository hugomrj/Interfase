/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.itx.application.categoria;

import java.util.ArrayList;
import java.util.List;
import nebuleuse.ORM.Secuencia;


public class CategoriaDAO {
    
    private final Secuencia<Categoria> lista = new Secuencia<Categoria>();         
    private List<Categoria> categorias = new ArrayList<Categoria>();            

    public List<Categoria> listaCategorias(  String strBuscar, Integer pagina ) 
            throws Exception {
        
        categorias = lista.listaPaginacion(new Categoria(), strBuscar, pagina);      
        return categorias;

    }

    public List<Categoria> getListaCategorias( ) 
            throws Exception {
              
        return categorias;

    }
    
    

        
}