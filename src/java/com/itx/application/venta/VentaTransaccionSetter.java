/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
*/


package com.itx.application.venta;


import com.itx.application.cliente.Cliente;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Enumeration;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import nebuleuse.ORM.Persistencia;

///Compra/Transaccion/Nuevo.do

@WebServlet(name = "VentaTransaccionSetter",
        urlPatterns = {"/Venta/Setter.do"})


public class VentaTransaccionSetter extends HttpServlet {


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

            
            Venta venta = new Venta();
            Persistencia persistencia = new Persistencia();
            String session = "VentaTransaccionSessionCabecera";
            
            
            // si existe variable e session
            if (( request.getSession().getAttribute(session) == null ))
            {
                System.out.println("entra a session es nulo");
                request.getSession().setAttribute(session, venta);                
            }
            else
            {
                venta = (Venta) request.getSession().getAttribute(session) ;            
            }
            
                                  
            
            if (request.getParameter("numero_factura") != null )
            {                                
                venta = (Venta) request.getSession().getAttribute(session) ;
                Long numero_factura =  Long.parseLong(request.getParameter("numero_factura") ) ;
                venta.setNumero_factura( numero_factura );
            }
                        
            
            if (request.getParameter("fecha_factura") != null )
            {                                
                venta = (Venta) request.getSession().getAttribute(session) ;                
                DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
                Date fecha_factura = formatter.parse(request.getParameter("fecha_factura"));
                venta.setFecha_factura( fecha_factura );                
            }                      
            
            
            if (request.getParameter("cliente") != null ) 
            {
                
                Cliente cliente = new Cliente();
                Integer id_cliente =  Integer.parseInt( request.getParameter("cliente") ) ;
                cliente = (Cliente) persistencia.filtrarId(cliente, id_cliente);
                venta.setCliente(cliente);
                
            }           
            
            
            request.getSession().setAttribute(session, venta);                 
            venta = (Venta) request.getSession().getAttribute(session) ;
            
             
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
            Logger.getLogger(VentaTransaccionSetter.class.getName()).log(Level.SEVERE, null, ex);
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
            Logger.getLogger(VentaTransaccionSetter.class.getName()).log(Level.SEVERE, null, ex);
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
