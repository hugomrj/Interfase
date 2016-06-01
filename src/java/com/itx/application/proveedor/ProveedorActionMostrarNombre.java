/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.itx.application.proveedor;

import com.itx.application.producto.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import nebuleuse.ORM.Persistencia;

/**
 *
 * @author hugom_000
 */

@WebServlet(name = "ProveedorActionMostrarNombre", 
        urlPatterns = {"/Proveedor/Mostrar/Nombre.do"})


public class ProveedorActionMostrarNombre extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, Exception {
        
        
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        if (request.getParameter("valor") == "")
        {
          out.println("");
          return;
        }
        Integer intParametro = Integer.parseInt(request.getParameter("valor")) ; 
        
        Proveedor proveedor = new Proveedor();
        Persistencia persistencia = new Persistencia();
                
        try 
        {        
            proveedor = (Proveedor) persistencia.filtrarId(proveedor, intParametro);            
            
            if (proveedor != null)
            {
                out.println(proveedor.getNombre() );
            }
            else
            {
              out.println("");
            }
            
        }
        
        finally 
        {
            out.close();
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (Exception ex) {
            Logger.getLogger(ProveedorActionMostrarNombre.class.getName()).log(Level.SEVERE, null, ex);
        }
    }


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (Exception ex) {
            Logger.getLogger(ProveedorActionMostrarNombre.class.getName()).log(Level.SEVERE, null, ex);
        }
    }


    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
