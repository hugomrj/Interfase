/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.itx.application.venta;

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


@WebServlet(name = "VentaTransaccionGuardar",
        urlPatterns = {"/Venta/Transaccion/Guardar.do"})


public class VentaTransaccionGuardar extends HttpServlet {


    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, Exception {
        
        
                System.out.println("entro en guardar Venta!!!!!!!!!!!!");
                    
            String sessionCabecera = "VentaTransaccionSessionCabecera";
            String sessionDetalle = "VentaDetalleTransaccionSessionLista";
            
            Venta venta = new Venta();
            List<VentaDetalle> coleccion = new ArrayList<VentaDetalle>();  
            Persistencia persistencia = new Persistencia();
                        
            
            // obtencion de valores de formulario
            if (request.getSession().getAttribute(sessionCabecera) != null  )
            {                                 
                 venta = (Venta) request.getSession().getAttribute(sessionCabecera) ;                    
            }                
            else
            {
                // error en cabecera, es nulo
            }
                
            
            
            if (request.getSession().getAttribute(sessionDetalle) != null  )
            {    
                coleccion = (List<VentaDetalle>) request.getSession().getAttribute(sessionDetalle);
            }                
            else
            {
                // error en cabecera, es nulo
            }                        
            // control valores de objetos
            
            venta = (Venta) persistencia.insert(venta);
            
            for (VentaDetalle detalle : coleccion) {
                                
                detalle.setVenta(venta);
                detalle = (VentaDetalle) persistencia.insert(detalle);
                
            }
            
            request.getSession().setAttribute(sessionCabecera, null);
            request.getSession().setAttribute(sessionDetalle, null);              

            response.sendRedirect("../Listar.do");    
            
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
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
            Logger.getLogger(VentaTransaccionGuardar.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
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
            Logger.getLogger(VentaTransaccionGuardar.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
