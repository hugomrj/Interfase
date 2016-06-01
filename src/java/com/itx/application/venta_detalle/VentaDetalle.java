/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itx.application.venta_detalle;

import com.itx.application.producto.Producto;
import com.itx.application.venta.Venta;

/**
 * @author hugo
 */

public class VentaDetalle {
    
    private Integer id;
    private Venta venta;
    private Producto producto;
    private Integer cantidad;
    private Long precio_venta;
    private Long sub_total;
    private Long porcentaje0;
    private Long porcentaje5;
    private Long porcentaje10;
    private Long descuento;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Venta getVenta() {
        return venta;
    }

    public void setVenta(Venta venta) {
        this.venta = venta;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }


    public Long getSub_total() {
        return sub_total;
    }

    public void setSub_total(Long sub_total) {
        this.sub_total = sub_total;
    }

    public Long getPorcentaje0() {
        return porcentaje0;
    }

    public void setPorcentaje0(Long porcentaje0) {
        this.porcentaje0 = porcentaje0;
    }

    public Long getPorcentaje5() {
        return porcentaje5;
    }

    public void setPorcentaje5(Long porcentaje5) {
        this.porcentaje5 = porcentaje5;
    }

    public Long getPorcentaje10() {
        return porcentaje10;
    }

    public void setPorcentaje10(Long porcentaje10) {
        this.porcentaje10 = porcentaje10;
    }

    public Long getDescuento() {
        return descuento;
    }

    public void setDescuento(Long descuento) {
        this.descuento = descuento;
    }

    public Long getPrecio_venta() {
        return precio_venta;
    }

    public void setPrecio_venta(Long precio_venta) {
        this.precio_venta = precio_venta;        
    }
    
    
    public void ImpuestoIva(Integer iva) {
        
        if (iva == 0){
            this.porcentaje0 = this.cantidad * this.precio_venta;
            this.porcentaje5 = 0L;
            this.porcentaje10 = 0L;
        }
        else if (iva == 5)
        {
            this.porcentaje0 = 0L;
            this.porcentaje5 = this.cantidad * this.precio_venta; ;
            this.porcentaje10 = 0L;
        }
        else if (iva == 10)
        {
            this.porcentaje0 = 0L;
            this.porcentaje5 = 0L;
            this.porcentaje10 = this.cantidad * this.precio_venta;
        }
        
    }
    
    
    
    
}

