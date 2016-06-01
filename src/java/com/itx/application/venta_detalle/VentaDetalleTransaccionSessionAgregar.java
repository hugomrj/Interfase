/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.itx.application.venta_detalle;

import com.itx.application.compra_detalle.*;
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



@WebServlet(name = "VentaDetalleTransaccionSessionAgregar",
        urlPatterns = {"/VentaDetalle/Session/Agregar.do"})


public class VentaDetalleTransaccionSessionAgregar extends HttpServlet {


    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, Exception {
                
      
   
            System.out.println("INICIO parametros");  
            Enumeration<String> parametros = request.getParameterNames();
            while(parametros.hasMoreElements())
            {
                String strParametro = parametros.nextElement();
                System.out.println(strParametro);
                System.out.println(request.getParameter(strParametro));
            }        
     
        
        System.out.println(" entra al servlet!!!!!");
        
        
            VentaDetalle  instancia = new VentaDetalle();
            Persistencia persistencia = new Persistencia();
                        
            instancia = (VentaDetalle) persistencia.extraerRegistro(request, instancia);                                  
                        
            instancia.setPrecio_venta(Long.parseLong(  request.getParameter("precio_venta").replace(",", "")  ));
            instancia.ImpuestoIva(Integer.parseInt( request.getParameter("impuesto").replace(",", "") ));
           
            
            List<VentaDetalle> coleccion = new ArrayList<VentaDetalle>();                  
            String session = "VentaDetalleTransaccionSessionLista";           
                       
            
            if (request.getSession().getAttribute(session) == null )
            {                
                coleccion.add(instancia);
            }
            else
            {
                coleccion = (List<VentaDetalle>) request.getSession().getAttribute(session);         
                coleccion.add(instancia);
            }
             
            
            // reordenar coleccion para numerar id
            Integer indice = 0;
            for (VentaDetalle detalle : coleccion) {                                
                detalle.setId(indice);                
                indice ++;
            }               
              

            //response.sendRedirect("../../Venta/Nuevo.jspx");  
        
            
            
            
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
            Logger.getLogger(VentaDetalleTransaccionSessionAgregar.class.getName()).log(Level.SEVERE, null, ex);
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
            Logger.getLogger(VentaDetalleTransaccionSessionAgregar.class.getName()).log(Level.SEVERE, null, ex);
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
