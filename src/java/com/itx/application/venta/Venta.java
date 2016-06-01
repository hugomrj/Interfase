/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itx.application.venta;

import com.itx.application.cliente.Cliente;
import com.itx.system.usuario.Usuario;
import java.util.Date;

/**
 * @author hugo
 */
public class Venta {
    
    private Integer venta;
    private Long numero_factura;
    private Date fecha;
    private Date fecha_factura;
    private Cliente cliente;
    private Long gravada0;
    private Long gravada5;
    private Long gravada10;
    private Long iva5;
    private Long iva10;
    private Long monto_total;    
    private Long monto_importe;
    private Long monto_vuelto;
    private Usuario usuario;

    public Integer getVenta() {
        return venta;
    }

    public void setVenta(Integer venta) {
        this.venta = venta;
    }

    public Long getNumero_factura() {
        return numero_factura;
    }

    public void setNumero_factura(Long numero_factura) {
        this.numero_factura = numero_factura;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Date getFecha_factura() {
        return fecha_factura;
    }

    public void setFecha_factura(Date fecha_factura) {
        this.fecha_factura = fecha_factura;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Long getGravada0() {
        return gravada0;
    }

    public void setGravada0(Long gravada0) {
        this.gravada0 = gravada0;
    }

    public Long getGravada5() {
        return gravada5;
    }

    public void setGravada5(Long gravada5) {
        this.gravada5 = gravada5;
    }

    public Long getGravada10() {
        return gravada10;
    }

    public void setGravada10(Long gravada10) {
        this.gravada10 = gravada10;
    }

    public Long getIva5() {
        return iva5;
    }

    public void setIva5(Long iva5) {
        this.iva5 = iva5;
    }

    public Long getIva10() {
        return iva10;
    }

    public void setIva10(Long iva10) {
        this.iva10 = iva10;
    }

    public Long getMonto_total() {
        return monto_total;
    }

    public void setMonto_total(Long monto_total) {
        this.monto_total = monto_total;
    }

    public Long getMonto_importe() {
        return monto_importe;
    }

    public void setMonto_importe(Long monto_importe) {
        this.monto_importe = monto_importe;
    }

    public Long getMonto_vuelto() {
        return monto_vuelto;
    }

    public void setMonto_vuelto(Long monto_vuelto) {
        this.monto_vuelto = monto_vuelto;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
    
}


