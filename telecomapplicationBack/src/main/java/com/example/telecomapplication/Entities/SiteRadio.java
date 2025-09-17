package com.example.telecomapplication.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import java.io.Serializable;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SiteRadio implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long idSiteRadio;
    String Adresse;
    String Cordonnees;
    Long NbrModuleRadio_Logique;
    Long NbrModuleRadio_Physique;
    String Equipement;

    @Enumerated(EnumType.STRING)
    CategorieSiteRadio CategorieSite;

    @Enumerated(EnumType.STRING)
    TechnologieSiteRadio TechnologieSite;

    @Enumerated(EnumType.STRING)
    TypeSiteRadio TypeSite;

    @Enumerated(EnumType.STRING)
    TypeAccesSiteRadio AccesSite;

    @OneToMany(mappedBy = "siteRadio",cascade = CascadeType.ALL)
    List<Transmission> transmissions;

    @OneToMany(mappedBy = "siteRadio",cascade = CascadeType.ALL)
    List<Antenne> antennes;

    @OneToMany(mappedBy = "siteRadio", cascade = CascadeType.ALL)
    @JsonIgnore
     List<Derangement> derangements;

}
