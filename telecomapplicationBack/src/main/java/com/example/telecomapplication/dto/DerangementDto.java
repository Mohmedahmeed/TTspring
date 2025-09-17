package com.example.telecomapplication.dto;

import com.example.telecomapplication.Entities.TypeDerangement;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@AllArgsConstructor
@Data
public class DerangementDto {

    private Long idDerangement;
    private Date dateDerangement;
    private Long probAcces;
    private Long action;
    private TypeDerangement typeDerangement;
    private Long idSiteRadio;

   /* public DerangementDto(Long idDerangement, Date dateDerangement, Long probAcces, Long action, TypeDerangement typeDerangement, Long idSiteRadio) {
        this.idDerangement = idDerangement;
        this.dateDerangement = dateDerangement;
        this.probAcces = probAcces;
        this.action = action;
        this.typeDerangement = typeDerangement;
        this.idSiteRadio = idSiteRadio;
    }*/
}