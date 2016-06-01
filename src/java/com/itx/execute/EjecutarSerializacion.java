/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.itx.execute;

import com.itx.application.producto.Producto;
import nebuleuse.ORM.Atributo;
import nebuleuse.ORM.Enlace;
import nebuleuse.ORM.Persistencia;
import nebuleuse.ORM.Serializacion;

/**
 * @author hugom_000
 */

public class EjecutarSerializacion {
    
    
         public static  void main(String[] args) throws Exception   {
             
             Serializacion s = new Serializacion(new Producto());
             
             System.out.println("---  recorrer serializacion ");
             
            for(int x=0; x<s.getElementos().size(); x++) 
            {

              System.out.println(s.getElementos().get(x).getObjeto());
              System.out.println(s.getElementos().get(x).getTabla() );
              System.out.println(s.getElementos().get(x).getAtributo().size() );

                for ( Atributo atri : s.getElementos().get(x).getAtributo() ) 
                {

                    
                        System.out.println(atri.getNombre()   );
                        System.out.println(atri.getValor()   );

                }

            }                     
         
     }        

    
}
