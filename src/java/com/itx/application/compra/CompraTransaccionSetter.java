/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
*/


package com.itx.application.compra;


import com.itx.application.compra_detalle.*;
import com.itx.application.proveedor.Proveedor;
import com.itx.system.usuario_rol.*;
import java.io.IOException;
import java.io.PrintWriter;
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

@WebServlet(name = "CompraTransaccionSetter",
        urlPatterns = {"/Compra/Setter.do"})


public class CompraTransaccionSetter extends HttpServlet {


    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, Exception {
                
        
        
        // posiblemente este archivo ya no se va a usar mas
        
        
        
        
        
        
        
            System.out.println("entro a session agregar");
          
            System.out.println("INICIO parametros");  
            Enumeration<String> parametros = request.getParameterNames();
            while(parametros.hasMoreElements())
            {
                String strParametro = parametros.nextElement();
                System.out.println(strParametro);
                System.out.println(request.getParameter(strParametro));
            }        

            
            Compra compra = new Compra();
            Persistencia persistencia = new Persistencia();
            String session = "CompraTransaccionSessionCabecera";
                    

            
            // si existe variable e session
            if (( request.getSession().getAttribute(session) == null ))
            {
                System.out.println("entra a session es nulo");
                request.getSession().setAttribute(session, compra);                
            }
            else
            {
                compra = (Compra) request.getSession().getAttribute(session) ;            
            }
            
                                  
            
            if (request.getParameter("factura") != null )
            {                                
                compra = (Compra) request.getSession().getAttribute(session) ;
                Integer factura =  Integer.parseInt( request.getParameter("factura") ) ;
                compra.setFactura(  factura );
            }
                        
            
            if (request.getParameter("fecha_factura") != null )
            {                                
                compra = (Compra) request.getSession().getAttribute(session) ;                
                DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
                Date fecha_factura = formatter.parse(request.getParameter("fecha_factura"));
                compra.setFecha_factura( fecha_factura );                
            }                      
            
            if (request.getParameter("proveedor") != null ) 
            {
                
                Proveedor proveedor = new Proveedor();
                Integer id_provedor =  Integer.parseInt( request.getParameter("proveedor") ) ;
                proveedor = (Proveedor) persistencia.filtrarId(proveedor, id_provedor);
                compra.setProveedor(proveedor);
                        
                System.out.println("entra a proveedor!!!!!");
                System.out.println( id_provedor  );
                
            }           
            
            
            request.getSession().setAttribute(session, compra);     
            
            compra = (Compra) request.getSession().getAttribute(session) ;
            
            
            System.out.println("compra.getFactura()");
            System.out.println(compra.getFactura());
            System.out.println("compra.getFecha_factura()" );             
            System.out.println(compra.getFecha_factura());             
            System.out.println("proveedor");             
            System.out.println(compra.getProveedor().getProveedor());             
            System.out.println(compra.getProveedor().getProveedor());             
        
             
             
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
            Logger.getLogger(CompraTransaccionSetter.class.getName()).log(Level.SEVERE, null, ex);
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
            Logger.getLogger(CompraTransaccionSetter.class.getName()).log(Level.SEVERE, null, ex);
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
