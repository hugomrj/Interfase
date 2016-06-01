/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itx.system.usuario;

import com.itx.system.rol.Rol;
import com.itx.system.gui.tab.Tab;
import com.itx.system.usuario_rol.UsuarioRol;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import nebuleuse.ORM.Persistencia;
import nebuleuse.ORM.Secuencia;


@WebServlet(name = "UsuarioControllerRegistro",
        urlPatterns = {"/Usuario/Registro.do"})

public class UsuarioControllerRegistro extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        try
        {
                                 
            Integer intParametro = Integer.parseInt(request.getParameter("id")) ;              
            UsuarioAction usuarioAction = new UsuarioAction();
                        
            request.getSession().setAttribute("SessionControlUsuario", usuarioAction.filtrar(intParametro)); 

            
            
            
    // trabajar sobre las tabs
    Tab t = new Tab();            
    request = t.divisiones(request, new Usuario()) ;
            
    Secuencia<UsuarioRol> secuencia = new Secuencia<UsuarioRol>(); 
    List<UsuarioRol> SessionRolLista  = new ArrayList<UsuarioRol>();         
    SessionRolLista = secuencia.buscarTodos(new UsuarioRol(), "");                    

    request.getSession().setAttribute("SessionRolLista", SessionRolLista);    
                
    Integer pagina = 1;
    if ( request.getParameter("page") != null) 
    {
        pagina = Integer.parseInt(request.getParameter("page"));
    }                    
            
    request.getSession().setAttribute("SessionPaginaNumeroActual", pagina);      
    request.getSession().setAttribute("SessionPaginaVinculo", "../Usuario/Listar.do");      
    request.getSession().setAttribute("SessionPaginaCantidadLinea", secuencia.lineas);    
    request.getSession().setAttribute("SessionPaginaTotalRegistros", secuencia.TotalRegistros(new UsuarioRol(), ""));                      

    
    
            response.sendRedirect("../Usuario/Registro.jspx");
            
            
        } catch (Exception ex) {
            Logger.getLogger(UsuarioControllerRegistro.class.getName()).log(Level.SEVERE, null, ex);
        }
                

        
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /** 
     * Handles the HTTP <code>GET</code> method.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /** 
     * Handles the HTTP <code>POST</code> method.
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /** 
     * Returns a short description of the servlet.
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
}
