/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.itx.application.categoria;


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

@WebServlet(name = "CategoriaActionMostrarDescripcion",
        urlPatterns = {"/Categoria/Mostrar/Descripcion.do"})


public class CategoriaActionMostrarDescripcion extends HttpServlet {

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

        Categoria categoria = new Categoria();
        Persistencia persistencia = new Persistencia();

        try
        {

            categoria = (Categoria) persistencia.filtrarId(categoria, intParametro);

            if (categoria != null)
            {
                out.println(categoria.getDescripcion());
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
            Logger.getLogger(CategoriaActionMostrarDescripcion.class.getName()).log(Level.SEVERE, null, ex);
        }
    }


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (Exception ex) {
            Logger.getLogger(CategoriaActionMostrarDescripcion.class.getName()).log(Level.SEVERE, null, ex);
        }
    }


    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
