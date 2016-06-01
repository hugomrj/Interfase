/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itx.system.usuario;


import com.itx.system.modulo.Modulo;
import com.itx.system.modulo.ModuloListar;
import java.io.IOException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import nebuleuse.GUI.web.Mensaje;


@WebServlet(name = "UsuarioControllerLogin", 
        urlPatterns = {
            "/Usuario/Login.do"           
        })


public class UsuarioControllerLogin extends HttpServlet {
 
    protected void processRequest(HttpServletRequest request, HttpServletResponse response) 
            throws IOException, Exception  {
                
                
        if (request.getHeader("referer") == null)
        {
            response.sendRedirect("../login.jspx");    
        }
        
        
        request.getSession().setAttribute("SessionTheme", "themes/Blue.css");  
        
        String strCuenta = (String) request.getParameter("cuenta");
        String strClave = (String) request.getParameter("clave");

        Usuario usuario = new Usuario();
        usuario = Usuario.existeUsuario(strCuenta, strClave);
            
            
            
        if (usuario == null) 
        {           
            
            Mensaje mensaje = new Mensaje();
            mensaje.setEtiqueta("loginNOT");
            mensaje.setTipo("error");             
            mensaje.guardarInformacion();
            
            //request.getSession().invalidate();
            //response.sendRedirect("../accesoNOT.jspx");      
            
            request.getSession().setAttribute("SessionMensajes", mensaje);
            
            response.sendRedirect("../login.jspx");      
            
        }
        else
        {
            
            String ipCustom = request.getRemoteAddr();
            String hostName = request.getRemoteHost(); 
            
            System.out.println("conexion desde");
            System.out.println(ipCustom);
            System.out.println(hostName);
            
            
            request.getSession().setAttribute("SessionUsuario", usuario);
            ModuloListar moduloListar = new ModuloListar();

            List<Modulo> ListaModulos = moduloListar.ejecutar(usuario);
            request.getSession().setAttribute("SessionModulos", ListaModulos);                
            response.sendRedirect("../Interaccion/Indice.jspx");         
            
            
        }            

     
    }
 
    
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (Exception ex) {
            Logger.getLogger(UsuarioControllerLogin.class.getName()).log(Level.SEVERE, null, ex);
        }
    } 
 
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        try {
            processRequest(request, response);
        } catch (Exception ex) {
            Logger.getLogger(UsuarioControllerLogin.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
 
}