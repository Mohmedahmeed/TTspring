package com.example.telecomapplication.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import java.io.Serializable;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Antenne implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long idAntenne;
    Long NbrAntenne;
    @Enumerated(EnumType.STRING)
    private TypePositionAntenne positionAntenne;
    @Enumerated(EnumType.STRING)
    private TypeFournisseur typeFournisseur;

    @ManyToOne
    @JsonIgnore
   SiteRadio siteRadio;

}
