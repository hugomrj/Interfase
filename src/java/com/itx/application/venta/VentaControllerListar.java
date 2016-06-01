/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itx.application.venta;


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
import nebuleuse.ORM.Secuencia;

/**
 *
 * @author hugo
 */

@WebServlet(name = "VentaControllerListar", 
        urlPatterns = {"/Venta/Listar.do"})


public class VentaControllerListar extends HttpServlet {

    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, Exception {
        
        // busqueda
        String strBuscar = "";
        strBuscar = (String) request.getParameter("buscar");        
        
        System.out.println("parametro");
        System.out.println(strBuscar);
        
        if (strBuscar == null)
        {
            strBuscar = "";        
        }
        
        
        Integer pagina = 1;
        if ( request.getParameter("page") != null) 
        {
            pagina = Integer.parseInt(request.getParameter("page"));
        }
            
        Secuencia<Venta> lista = new Secuencia<Venta>();         
        List<Venta> compras = new ArrayList<Venta>();       
        
        compras = lista.listaPaginacion(new Venta(), strBuscar, pagina);                      
            
        request.getSession().setAttribute("SessionLista", compras);      
                
        request.getSession().setAttribute("SessionPaginaNumeroActual", pagina);      
        request.getSession().setAttribute("SessionPaginaVinculo", "../Venta/Listar.do");      
        request.getSession().setAttribute("SessionPaginaCantidadLinea", lista.lineas);    
        request.getSession().setAttribute("SessionPaginaTotalRegistros", lista.TotalRegistros(new Venta(), strBuscar));    
                
        response.sendRedirect("../Venta/Lista.jspx");  
       
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
            Logger.getLogger(VentaControllerListar.class.getName()).log(Level.SEVERE, null, ex);
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
            Logger.getLogger(VentaControllerListar.class.getName()).log(Level.SEVERE, null, ex);
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
