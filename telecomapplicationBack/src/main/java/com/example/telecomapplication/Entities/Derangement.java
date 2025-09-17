package com.example.telecomapplication.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Derangement implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long idDerangement;
    @Temporal(TemporalType.DATE)
    Date DateDerangement;
    Long ProbAcces;
    Long Action;
    @Enumerated(EnumType.STRING)
    TypeDerangement TypeDerangement;

    @ManyToOne
     SiteRadio siteRadio;
}
