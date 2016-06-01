/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.itx.application.compra;

import com.itx.application.compra_detalle.CompraDetalle;
import com.itx.system.usuario_rol.UsuarioRol;
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
import nebuleuse.GUI.web.HttpAction;
import nebuleuse.ORM.Persistencia;


@WebServlet(name = "CompraTransaccionGuardar",
        urlPatterns = {"/Compra/Transaccion/Guardar.do"})


public class CompraTransaccionGuardar extends HttpServlet {


    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, Exception {
        
        
                System.out.println("entro en guardar compra!!!!!!!!!!!!");
                    
                // obtiene ambas variables de sessiones, cabecera y detalle                
                // CompraTransaccionSessionCabecera, es un tipo Compra                
                // CompraDetalleTransaccionSessionLista, es un tipo List<CompraDetalle>
                

            //String sessionDetalle = "CompraDetalleTransaccionSessionLista";
            
                                
            Compra compra = new Compra();
            Persistencia persistencia = new Persistencia();
            compra = (Compra) persistencia.extraerRegistro(request, compra);
            
            
System.out.println( compra.getFecha_factura()  );
            
            
            // tal vez haga falta un reques response que que se envie por parametro para cargar el mensaje de accion
            compra = (Compra) persistencia.insert(compra, request);
            
            HttpAction alerta = new HttpAction();            
            alerta.for_Insert(compra, request, response);

            
            
            
            

            
/*            
            if (request.getSession().getAttribute(sessionDetalle) != null  )
            {    
                coleccion = (List<CompraDetalle>) request.getSession().getAttribute(sessionDetalle);
            }                
            else
            {
                // error en cabecera, es nulo
            }
                        

            
            // recorrer para guardar objetos
            
            System.out.println(compra.getCompra());
            System.out.println(compra.getFactura());
            System.out.println(compra.getFecha_factura());
            System.out.println(compra.getProveedor().getProveedor());
            System.out.println(compra.getProveedor().getNombre());

            compra = (Compra) persistencia.insert(compra);
            
            
            for (CompraDetalle detalle : coleccion) {
                
                System.out.println(detalle.getCantidad());
                System.out.println(detalle.getPrecio());
                System.out.println(detalle.getSub_total());
                System.out.println(detalle.getProducto().getNombre());
                                
                detalle.setCompra(compra);
                detalle = (CompraDetalle) persistencia.insert(detalle);
                
            }
            

            request.getSession().setAttribute(sessionDetalle, null);              
*/
            //response.sendRedirect("../Listar.do");    
            
            
            
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
            Logger.getLogger(CompraTransaccionGuardar.class.getName()).log(Level.SEVERE, null, ex);
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
            Logger.getLogger(CompraTransaccionGuardar.class.getName()).log(Level.SEVERE, null, ex);
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
