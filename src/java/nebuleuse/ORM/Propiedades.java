/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package nebuleuse.ORM;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Enumeration;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author hugo
 */
public class Propiedades {
        
    private String path =  this.getClass().getResource("/").getPath().replaceAll("classes", "conf");        
    
        Properties properties = new Properties();
        File file;
        FileInputStream fileInput;
        Enumeration enuKeys ;
                   
        
    public void Init() throws FileNotFoundException, IOException  {
        
            this.file = new File(this.path+"properties.xml");

            this.fileInput = new FileInputStream(file);

            this.properties = new Properties();
            
            this.properties.loadFromXML(fileInput);

            this.fileInput.close();
        
    }

    
    public String getData( String strKey) 
            throws IOException  {
           
        String retornar = "";
        this.Init();        
        this.enuKeys = this.properties.keys();
        
        while (this.enuKeys.hasMoreElements()) 
        {
            String xmlkey = (String) enuKeys.nextElement();
            String xmlvalue = properties.getProperty(xmlkey);            
            
            if (xmlkey.equals(strKey))
            {
                retornar = xmlvalue;                            
            }
                //System.out.println(xmlkey + ": " + xmlvalue);
        }   
        
        return retornar;
        
    }
    
    
    
    
     

    
    
    
}






