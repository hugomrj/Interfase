/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package nebuleuse.ORM;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;




public class Conexion {
    
    static String driver = "org.postgresql.Driver";    
    static String server = "";    
    static String database = "";    
    public String user = "";    
    public String puerto = "";    
    public String password = "";    
    public String url = "";  
    public Connection conn = null;
    
    
public  void Conexion() {
   
}     


public  void inicializar() {
            
        try 
        {
                        
            Propiedades propiedades = new Propiedades();
            
            
            this.server = propiedades.getData("server");
            this.database = propiedades.getData("database");
            this.user = propiedades.getData("user");
            this.password = propiedades.getData("password");
            this.puerto = propiedades.getData("puerto");
            
               
            this.url = "jdbc:postgresql://"+this.server+":"+this.puerto+"/"+this.database;  
            
        } catch (IOException ex) 
        {
            Logger.getLogger(Conexion.class.getName()).log(Level.SEVERE, null, ex);
        }
    
    
}     



public  void conectar() {
    
    this.inicializar();
    
    try {      
        
        Class.forName(Conexion.driver).newInstance();        
        conn = DriverManager.getConnection(url,user,password);
        
        /*        
        if (conn != null)  {
            System.out.println("Conexión a base de datos "+url+" ... Ok");
        }
        */
    }
    catch(SQLException ex) {      
        System.out.println("Hubo un problema al intentar conectarse con la base de datos "+url);
        System.out.println(ex.getMessage());
        
        
    }
    catch(Exception ex) {
        System.out.println(ex);
    }
}

    public void desconectar() throws SQLException{
        if ( this.conn.isClosed() == false ){
            this.conn.close();
        }
    }

    public Connection getConexion() {
        return conn;
    }
    
    
    public String getServer() {      
        return Conexion.server;      
    }
    
   
}
















