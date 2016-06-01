/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itx.application.venta;

import com.itx.execute.*;
import java.io.IOException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import nebuleuse.ORM.Conexion;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;


/**
 *
 * @author hugo
 
      VentaControllerFacturaReporte
      
 */


@WebServlet(name = "VentaControllerFacturaReporte", 
        urlPatterns = {"/Venta/Factura/Reporte.do"})


public class VentaControllerFacturaReporte extends HttpServlet {


    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, JRException {
        
        Integer id = Integer.parseInt(request.getParameter("id"));        
        String file = "VentaFacturaReporte";

        Conexion cnx = new Conexion();
        cnx.conectar();
        
        String url =  request.getServletContext().getRealPath("/WEB-INF")+"/Reporte/";
        
        url = url + file+".jasper";
        
        Map parametros = new HashMap();
        parametros.put("venta_id", id);
        
        
        JasperPrint jasperPrint = JasperFillManager.fillReport(url,parametros,
                cnx.getConexion());

        ServletOutputStream servletOutputStream = response.getOutputStream();            
        byte[] reportePdf = JasperExportManager.exportReportToPdf(jasperPrint);

        
        response.setHeader("Content-disposition","inline; filename="+file+".pdf");
        response.setContentType("application/pdf");
        response.setContentLength(reportePdf.length);

        
        servletOutputStream.write(reportePdf, 0, reportePdf.length);
        servletOutputStream.flush();
        servletOutputStream.close();            
                        
            
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
        } catch (JRException ex) {
            Logger.getLogger(VentaControllerFacturaReporte.class.getName()).log(Level.SEVERE, null, ex);
        }
    }


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (JRException ex) {
            Logger.getLogger(VentaControllerFacturaReporte.class.getName()).log(Level.SEVERE, null, ex);
        }
    }


    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
