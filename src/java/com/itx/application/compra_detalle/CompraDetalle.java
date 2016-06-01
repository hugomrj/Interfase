/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.itx.application.compra_detalle;


import com.itx.application.compra.Compra;
import com.itx.application.producto.Producto;


public class CompraDetalle {
    
        private Integer id;
        private Compra compra = new Compra();
        private Producto producto = new Producto();
        private String nombre;
        private Integer cantidad;
        private Long precio;
        private Long sub_total;
        

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Compra getCompra() {
        return compra;
    }

    public void setCompra(Compra compra) {
        this.compra = compra;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }


    public Long getPrecio() {
        return precio;
    }


    public void setPrecio(Long precio) {
        this.precio = precio;
    }


    public Long getSub_total() {
        return sub_total;
    }


    public void setSub_total(Long sub_total) {
        this.sub_total = sub_total;
    }

        
}










