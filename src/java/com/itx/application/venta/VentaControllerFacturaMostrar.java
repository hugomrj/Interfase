/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package com.itx.application.venta;

import com.itx.application.compra.*;
import com.itx.application.compra_detalle.CompraDetalle;
import com.itx.application.venta_detalle.VentaDetalle;
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


@WebServlet(name = "VentaControllerFacturaMostrar", 
        urlPatterns = {"/Venta/FacturaMostrar.do"})


public class VentaControllerFacturaMostrar extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, Exception {

        // obteber id y contruir las consultas 
        Integer factura = Integer.parseInt(request.getParameter("id")) ; 
        
        Venta venta = new Venta();

        Persistencia persistencia = new Persistencia();
        
        venta = (Venta) persistencia.filtrarId(venta, factura);
        
        
        Secuencia<VentaDetalle> lista = new Secuencia<VentaDetalle>();           
        List<VentaDetalle> detalle = new ArrayList<VentaDetalle>();
        detalle = lista.listaColeccion(new VentaDetalle(), venta, "", 1);
        
        /*        
        request.setAttribute("venta", venta);
        request.setAttribute("detalle", detalle );        
        */
        
        request.getSession().setAttribute("venta", venta);
        request.getSession().setAttribute("detalle", detalle );        
        
        
        response.sendRedirect("../Venta/Factura.jspx");  
        //request.getRequestDispatcher("../Venta/Factura.jspx").include(request, response);
        
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
            Logger.getLogger(VentaControllerFacturaMostrar.class.getName()).log(Level.SEVERE, null, ex);
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
            Logger.getLogger(VentaControllerFacturaMostrar.class.getName()).log(Level.SEVERE, null, ex);
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








