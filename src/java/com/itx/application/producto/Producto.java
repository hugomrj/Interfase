
package com.itx.application.producto;

import com.itx.application.categoria.Categoria;


/**
 * @author hugom_000
 */


public class Producto {
    
    private Integer producto;
    private String nombre;
    private String codigo_barra;
    private Categoria categoria = new Categoria();
    private Long precio_venta;
    private Integer existencia;
    private Integer impuesto;
    private Long precio_valor;
    private Long impuesto_valor;

    public Integer getProducto() {
        return producto;
    }

    public void setProducto(Integer producto) {
        this.producto = producto;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCodigo_barra() {
        return codigo_barra;
    }

    public void setCodigo_barra(String codigo_barra) {
        this.codigo_barra = codigo_barra;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public Long getPrecio_venta() {
        return precio_venta;
    }

    public void setPrecio_venta(Long precio_venta) {
        this.precio_venta = precio_venta;
    }

    public Integer getExistencia() {
        return existencia;
    }

    public void setExistencia(Integer existencia) {
        this.existencia = existencia;
    }

    public Integer getImpuesto() {
        return impuesto;
    }

    public void setImpuesto(Integer impuesto) {
        this.impuesto = impuesto;
    }

    public Long getPrecio_valor() {
        return precio_valor;
    }

    public void setPrecio_valor(Long precio_valor) {
        this.precio_valor = precio_valor;
    }

    public Long getImpuesto_valor() {
        return impuesto_valor;
    }

    public void setImpuesto_valor(Long impuesto_valor) {
        this.impuesto_valor = impuesto_valor;
    }
    
}
