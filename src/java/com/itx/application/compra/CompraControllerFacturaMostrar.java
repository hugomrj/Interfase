/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package com.itx.application.compra;

import com.itx.application.compra_detalle.CompraDetalle;
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
import nebuleuse.ORM.Persistencia;
import nebuleuse.ORM.Secuencia;


@WebServlet(name = "CompraControllerFacturaMostrar", 
        urlPatterns = {"/Compra/FacturaMostrar.do"})


public class CompraControllerFacturaMostrar extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, Exception {

        // obteber id y contruir las consultas 
        Integer factura = Integer.parseInt(request.getParameter("id")) ; 
        
        Compra compra = new Compra();

        Persistencia persistencia = new Persistencia();
        
        compra = (Compra) persistencia.filtrarId(compra, factura);
        
        
        Secuencia<CompraDetalle> lista = new Secuencia<CompraDetalle>();           
        List<CompraDetalle> detalle = new ArrayList<CompraDetalle>();
        detalle = lista.listaColeccion(new CompraDetalle(), compra, "", 1);
        
                
        request.setAttribute("compra", compra);
        request.setAttribute("detalle", detalle );        
        
        
        //response.sendRedirect("../Compra/Lista.jspx");  
        request.getRequestDispatcher("../Compra/Factura.jspx").include(request, response);
        
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
            Logger.getLogger(CompraControllerFacturaMostrar.class.getName()).log(Level.SEVERE, null, ex);
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
            Logger.getLogger(CompraControllerFacturaMostrar.class.getName()).log(Level.SEVERE, null, ex);
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








