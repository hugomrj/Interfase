/*
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/

package com.itx.application.cliente;

import com.itx.application.proveedor.*;
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
 * @author hugom_000
 */

@WebServlet(name = "ClienteActionSubConsulta",
        urlPatterns = {"/Cliente/SubConsulta.do"})


public class ClienteActionSubConsulta extends HttpServlet {


    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, Exception {
        
        
        response.setContentType("text/html;charset=UTF-8");
        
        HttpRequest httpRequest = new HttpRequest();
        Integer pagina = httpRequest.getPage(request);
        String strBuscar = httpRequest.getBuscar(request);

        Secuencia<Cliente> lista = new Secuencia<Cliente>();         
        List<Cliente> SessionLista = new ArrayList<Cliente>();
        
        lista.subLineas = 10;
        SessionLista = lista.listaColeccion( new Cliente(), null, strBuscar, pagina );   

        request.getSession().setAttribute("session_consulta", SessionLista );            
       // request.setAttribute("session_consulta", SessionLista );            
        
        request.setAttribute("Pagina", pagina);      
        request.setAttribute("Lineas", lista.subLineas);
        request.setAttribute("TotalRegistros", lista.TotalRegistros(new Cliente(), strBuscar) );         
        
        request.setAttribute("Buscar", (strBuscar == null) ? "" : strBuscar );
        
        request.getRequestDispatcher("/Cliente/Sub/Consulta.jspx").include(request, response);

        
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
            Logger.getLogger(ClienteActionSubConsulta.class.getName()).log(Level.SEVERE, null, ex);
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
            Logger.getLogger(ClienteActionSubConsulta.class.getName()).log(Level.SEVERE, null, ex);
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
