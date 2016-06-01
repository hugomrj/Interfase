/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
 
package com.itx.system.usuario;

import nebuleuse.ORM.Persistencia;


public class Usuario {
    
    private Integer usuario;
    private String cuenta;
    private String pass;
    

    public Integer getUsuario() {
        return usuario;
    }

    public void setUsuario(Integer usuario) {
        this.usuario = usuario;
    }

    public String getCuenta() {
        return cuenta;
    }

    public void setCuenta(String cuenta) {
        this.cuenta = cuenta;
    }
    
    public String getPass() {        
        String strRetornar = "md5('"+pass+"')";               
        return strRetornar;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }
     

      public static Usuario existeUsuario(String cuenta, String pass) throws Exception {      

          Usuario objUsuario = new Usuario();  


          String sql = 
                    " SELECT usuario, cuenta, pass "
                    + " FROM usuarios "
                    + " WHERE cuenta like '"+cuenta+"'  " 
                    + "and pass like md5('"+pass+"')" ;         
         
         
          Persistencia persistencia = new Persistencia();            
          objUsuario = (Usuario) persistencia.sqlToObject(sql, objUsuario);

          return objUsuario;          

      }




    
}
