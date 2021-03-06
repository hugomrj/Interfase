/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itx.application.proveedor;

import com.itx.application.producto.*;
import com.itx.application.categoria.*;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import nebuleuse.GUI.web.HttpRequest;
import nebuleuse.ORM.Secuencia;

/**
 * @author hugo
 */

@WebServlet(name = "ProveedorControllerListar", 
        urlPatterns = {"/Proveedor/Listar.do"})


public class ProveedorControllerListar extends HttpServlet {

    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, Exception {
        
        // busqueda
        String strBuscar = "";
        strBuscar = (String) request.getParameter("buscar");        
        
        if (strBuscar == null) {
            strBuscar = "";        
        }
        
        Integer pagina = 1;
        if ( request.getParameter("page") != null) 
        {
            pagina = Integer.parseInt(request.getParameter("page"));
        }
            
       
        
        Secuencia<Proveedor> lista = new Secuencia<Proveedor>();         
        List<Proveedor> proveedores = new ArrayList<Proveedor>();       
        
        proveedores = lista.listaPaginacion(new Proveedor(), strBuscar, pagina);                      
            
        request.getSession().setAttribute("SessionListaProveedor", proveedores);
        
        
        request.getSession().setAttribute("SessionPaginaNumeroActual", pagina);      
        request.getSession().setAttribute("SessionPaginaVinculo", "../Proveedor/Listar.do");      
        request.getSession().setAttribute("SessionPaginaCantidadLinea", lista.lineas);    
        request.getSession().setAttribute("SessionPaginaTotalRegistros", lista.TotalRegistros(new Proveedor(), strBuscar));    
                
        
        
        response.sendRedirect("../Proveedor/Lista.jspx");  
       
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
        try {
            processRequest(request, response);
        } catch (Exception ex) {
            Logger.getLogger(ProveedorControllerListar.class.getName()).log(Level.SEVERE, null, ex);
        }
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
        try {
            processRequest(request, response);
        } catch (Exception ex) {
            Logger.getLogger(ProveedorControllerListar.class.getName()).log(Level.SEVERE, null, ex);
        }
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
