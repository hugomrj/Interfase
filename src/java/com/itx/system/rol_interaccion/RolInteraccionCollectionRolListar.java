/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.itx.system.rol_interaccion;


import com.itx.system.interaccion.Interaccion;
import java.io.IOException;
import java.io.PrintWriter;
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
import nebuleuse.ORM.Persistencia;
import nebuleuse.ORM.Secuencia;

/**
 * @author hugom_000
 */


@WebServlet(name = "RolInteraccionCollectionRolListar",
        urlPatterns = {"/RolInteraccion/Collection/Rol/Listar.do"})


public class RolInteraccionCollectionRolListar extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, Exception {
                
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        
        HttpRequest httpRequest = new HttpRequest();
        Integer pagina = httpRequest.getPage(request);
        String strBuscar = httpRequest.getBuscar(request);
                
        Integer parametro = 0;
        if ( request.getParameter("interaccion")  != null) 
        {
            parametro = Integer.parseInt(request.getParameter("interaccion"));
        }        
                
        try 
        {
            
            Persistencia persistencia = new Persistencia();
            Interaccion interaccion = new Interaccion();
            interaccion = (Interaccion) persistencia.filtrarId(interaccion, parametro );
        
                        
            Secuencia<RolInteraccion> lista = new Secuencia<RolInteraccion>();           
            List<RolInteraccion> coleccion = new ArrayList<RolInteraccion>();
            
            coleccion = lista.listaColeccion(new RolInteraccion(), interaccion, strBuscar, pagina);
  
            request.setAttribute("coleccion", coleccion );
           
            request.setAttribute("Pagina", pagina);      
            request.setAttribute("Lineas", lista.subLineas);        
            request.setAttribute("TotalRegistros", lista.TotalRegistros(new RolInteraccion(), interaccion ));              
            request.setAttribute("Vinculo", "../RolInteraccion/Collection/Rol/Listar.do?interaccion="+interaccion.getInteraccion());      
                                
            if  (!( httpRequest.getJSPorigen(request) == null )) 
            { 
                request.setAttribute("jsp", httpRequest.getJSPorigen(request));            
            }           
            
            request.setAttribute("interaccion",interaccion.getInteraccion());
            request.getRequestDispatcher("/Rol_Interaccion/Sub/ColeccionRolLista.jspx").include(request, response);
                       
        }
        
        
        finally 
        {
            out.close();
        }
        
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
            Logger.getLogger(RolInteraccionCollectionRolListar.class.getName()).log(Level.SEVERE, null, ex);
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
            Logger.getLogger(RolInteraccionCollectionRolListar.class.getName()).log(Level.SEVERE, null, ex);
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
