/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itx.system.gui.tab;

import com.itx.system.usuario.Usuario;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import nebuleuse.ORM.Persistencia;


public class Tab {
    
    private Integer codigo;
    private String nombre;

    public Tab(){
    }    
    

    public Tab(Integer codigo, String nombre){
         this.codigo = codigo;
         this.nombre = nombre;
    }
    
    public Integer getCodigo() {
        return codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    
    public List<Tab> getTabs( Object objeto) {
        
        List<Tab> tabs = new ArrayList<Tab>();  
        
        if (objeto.getClass().equals(Usuario.class))
        {
            tabs.add(new Tab( 1,"Roles"));
            tabs.add(new Tab( 2,"Tab2"));            
            tabs.add(new Tab( 3,"Tab3"));                                
        }
        
        return tabs;
    }

    
      public HttpServletRequest divisiones  (HttpServletRequest request, Object objeto) throws Exception {      
          
          
            Tab t = new Tab();
            List<Tab> tabs = t.getTabs( objeto.getClass().newInstance() );
            request.getSession().setAttribute("SessionReferencias", tabs);                            
            
            Integer codigoTab = 0;
            String codigoParametro = request.getParameter("tab");
            if (codigoParametro != null) { codigoTab =  Integer.parseInt(codigoParametro) ;  }            
            request.getSession().setAttribute("codigoTab", codigoTab);              
          
            return request;          

      }        

    
    
}
