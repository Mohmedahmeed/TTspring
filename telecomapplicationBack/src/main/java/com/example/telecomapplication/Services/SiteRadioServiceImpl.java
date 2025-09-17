package com.example.telecomapplication.Services;

import com.example.telecomapplication.Entities.*;
import com.example.telecomapplication.Repositories.AntenneRepositorie;
import com.example.telecomapplication.Repositories.DerangementRepositorie;
import com.example.telecomapplication.Repositories.SiteRadioRepositorie;
import com.example.telecomapplication.Repositories.TransmissionRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.itextpdf.io.font.constants.StandardFonts;
import com.itextpdf.kernel.colors.ColorConstants;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;
import com.itextpdf.layout.element.Cell;
import com.itextpdf.layout.property.TextAlignment;
import java.io.ByteArrayOutputStream;

@Service
public class SiteRadioServiceImpl implements ISiteRadioService{
    @Autowired
    SiteRadioRepositorie siteRadioRepositorie;
    @Autowired
    AntenneRepositorie antenneRepositorie;
    @Autowired
    TransmissionRepositorie transmissionRepositorie;
    @Autowired
    DerangementRepositorie derangementRepositorie;


    @Override
    public List<SiteRadio> getAllSiteRadios() {
        return siteRadioRepositorie.findAll();
    }

    @Override
    public Optional<SiteRadio> getSiteRadioById(Long idSiteRadio) {
        return siteRadioRepositorie.findById(idSiteRadio);
    }

    @Override
    public SiteRadio CreateSiteRadio(SiteRadio siteRadio) {
        // Initialiser les collections si elles sont nulles
        if (siteRadio.getTransmissions() == null) {
            siteRadio.setTransmissions(new ArrayList<>());
        }
        if (siteRadio.getAntennes() == null) {
            siteRadio.setAntennes(new ArrayList<>());
        }

        // Associer chaque Transmission au SiteRadio
        for (Transmission transmission : siteRadio.getTransmissions()) {
            transmission.setSiteRadio(siteRadio);
        }
        // Associer chaque Antenne au SiteRadio
        for (Antenne antenne : siteRadio.getAntennes()) {
            antenne.setSiteRadio(siteRadio);
        }

        // Enregistrer le SiteRadio (et cascade automatiquement les entités associées grâce à CascadeType.ALL)
        return siteRadioRepositorie.save(siteRadio);
    }


    @Override
    public SiteRadio UpdateSiteRadio(Long idSiteRadio, SiteRadio siteRadio) {
        Optional<SiteRadio> existingSiteRadioOptional = siteRadioRepositorie.findById(idSiteRadio);
        if (existingSiteRadioOptional.isPresent()){
            SiteRadio existingSiteRadio = existingSiteRadioOptional.get();

            // Mettre à jour les champs nécessaires du site radio existant
            existingSiteRadio.setAdresse(siteRadio.getAdresse());
            existingSiteRadio.setCordonnees(siteRadio.getCordonnees());
            existingSiteRadio.setNbrModuleRadio_Logique(siteRadio.getNbrModuleRadio_Logique());
            existingSiteRadio.setNbrModuleRadio_Physique(siteRadio.getNbrModuleRadio_Physique());
            existingSiteRadio.setEquipement(siteRadio.getEquipement());
            existingSiteRadio.setCategorieSite(siteRadio.getCategorieSite());
            existingSiteRadio.setTechnologieSite(siteRadio.getTechnologieSite());
            existingSiteRadio.setTypeSite(siteRadio.getTypeSite());

            // Mettre à jour les transmissions
            existingSiteRadio.getTransmissions().clear();
            for (Transmission transmission : siteRadio.getTransmissions()) {
                Transmission managedTransmission;
                if (transmission.getIdTransmission() != null) {
                    managedTransmission = transmissionRepositorie.findById(transmission.getIdTransmission()).orElse(new Transmission());
                } else {
                    managedTransmission = new Transmission(); // Nouvel objet si l'ID est null
                }
                managedTransmission.setCategorieSupport(transmission.getCategorieSupport());
                managedTransmission.setPath(transmission.getPath());
                managedTransmission.setSiteRadio(existingSiteRadio);
                existingSiteRadio.getTransmissions().add(managedTransmission);
            }

              // Mettre à jour les antennes
            existingSiteRadio.getAntennes().clear();
            for (Antenne antenne : siteRadio.getAntennes()) {
                Antenne managedAntenne;
                if (antenne.getIdAntenne() != null) {
                    managedAntenne = antenneRepositorie.findById(antenne.getIdAntenne()).orElse(new Antenne());
                } else {
                    managedAntenne = new Antenne(); // Nouvel objet si l'ID est null
                }
                managedAntenne.setNbrAntenne(antenne.getNbrAntenne());
                managedAntenne.setPositionAntenne(antenne.getPositionAntenne());
                managedAntenne.setTypeFournisseur(antenne.getTypeFournisseur());
                managedAntenne.setSiteRadio(existingSiteRadio);
                existingSiteRadio.getAntennes().add(managedAntenne);
            }



            // Enregistrer les modifications dans la base de données
            return siteRadioRepositorie.save(existingSiteRadio);
        } else {
            // Gérer le cas où le site radio n'est pas trouvé
            return null;
        }
    }




    @Override
    public void DeleteSiteRadio(Long idSiteRadio) {
        siteRadioRepositorie.deleteById(idSiteRadio);

    }

    @Override
    public Optional<SiteRadio> getSiteRadioForAntenne(Long idAntenne) {
        Optional<Antenne> AntenneOptionnal = antenneRepositorie.findAntenneByidAntenne(idAntenne);
        if (AntenneOptionnal.isPresent()) {
            return Optional.ofNullable( AntenneOptionnal.get().getSiteRadio());
        }
        return Optional.empty();
    }

    @Override
    public Optional<SiteRadio> getSiteRadioForTransmission(Long idTransmission) {
        Optional<Transmission> TransmissionOptionnal = transmissionRepositorie.findTransmissionByIdTransmission(idTransmission);
        if (TransmissionOptionnal.isPresent()) {
            return Optional.ofNullable( TransmissionOptionnal.get().getSiteRadio());
        }
        return Optional.empty();
    }

    @Override
    public List<SiteRadio> searchSiteRadio(TypeSiteRadio typeSite) {
        return siteRadioRepositorie.findByTypeSite(typeSite);
    }



    //export les sites radios
    @Override
    public byte[] exportSiteRadios() throws IOException {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        PdfWriter writer = new PdfWriter(baos);
        PdfDocument pdfDoc = new PdfDocument(writer);
        Document document = new Document(pdfDoc);

        // Récupérer les données de SiteRadio
        List<SiteRadio> siteRadios = getAllSiteRadios(); // Assurez-vous que cette méthode existe

        int siteRadioCounter = 1;

        for (SiteRadio siteRadio : siteRadios) {
            // Ajouter les informations sur SiteRadio
            document.add(new Paragraph("Site Radio"+ siteRadioCounter++)
                    .setBold().setFontSize(14).setFontColor(ColorConstants.BLUE));

            Table siteRadioTable = new Table(2);
            siteRadioTable.addCell(new Cell().add(new Paragraph("Adresse")).setBold());
            siteRadioTable.addCell(new Cell().add(new Paragraph(siteRadio.getAdresse())));
            siteRadioTable.addCell(new Cell().add(new Paragraph("Coordonnées")).setBold());
            siteRadioTable.addCell(new Cell().add(new Paragraph(siteRadio.getCordonnees())));
            siteRadioTable.addCell(new Cell().add(new Paragraph("NbrModuleRadio Logique")).setBold());
            siteRadioTable.addCell(new Cell().add(new Paragraph(String.valueOf(siteRadio.getNbrModuleRadio_Logique()))));
            siteRadioTable.addCell(new Cell().add(new Paragraph("NbrModuleRadio Physique")).setBold());
            siteRadioTable.addCell(new Cell().add(new Paragraph(String.valueOf(siteRadio.getNbrModuleRadio_Physique()))));
            siteRadioTable.addCell(new Cell().add(new Paragraph("Equipement")).setBold());
            siteRadioTable.addCell(new Cell().add(new Paragraph(siteRadio.getEquipement())));
            siteRadioTable.addCell(new Cell().add(new Paragraph("Categorie Site")).setBold());
            siteRadioTable.addCell(new Cell().add(new Paragraph(String.valueOf(siteRadio.getCategorieSite()))));
            siteRadioTable.addCell(new Cell().add(new Paragraph("Technologie Site")).setBold());
            siteRadioTable.addCell(new Cell().add(new Paragraph(String.valueOf(siteRadio.getTechnologieSite()))));
            siteRadioTable.addCell(new Cell().add(new Paragraph("Type Site")).setBold());
            siteRadioTable.addCell(new Cell().add(new Paragraph(String.valueOf(siteRadio.getTypeSite()))));
            siteRadioTable.addCell(new Cell().add(new Paragraph("Acces Site")).setBold());
            siteRadioTable.addCell(new Cell().add(new Paragraph(String.valueOf(siteRadio.getAccesSite()))));

            document.add(siteRadioTable);
            document.add(new Paragraph("\n")); // Ajouter un espace entre les sections

            // Ajouter les informations sur Antenne
            document.add(new Paragraph("Antenne").setBold().setFontSize(12));
            Table antenneTable = new Table(3); // Définir les colonnes pour la table Antenne
            antenneTable.addCell(new Cell().add(new Paragraph("NbrAntenne").setBold()));
            antenneTable.addCell(new Cell().add(new Paragraph("Position Antenne").setBold()));
            antenneTable.addCell(new Cell().add(new Paragraph("Type Fournisseur").setBold()));

            for (Antenne antenne : siteRadio.getAntennes()) {
                antenneTable.addCell(new Cell().add(new Paragraph(String.valueOf(antenne.getNbrAntenne()))));
                antenneTable.addCell(new Cell().add(new Paragraph(String.valueOf(antenne.getPositionAntenne()))));
                antenneTable.addCell(new Cell().add(new Paragraph(String.valueOf(antenne.getTypeFournisseur()))));
            }
            document.add(antenneTable);
            document.add(new Paragraph("\n")); // Ajouter un espace entre les sections

            // Ajouter les informations sur Transmission
            document.add(new Paragraph("Transmission").setBold().setFontSize(12));
            Table transmissionTable = new Table(2); // Définir les colonnes pour la table Transmission
            transmissionTable.addCell(new Cell().add(new Paragraph("Path").setBold()));
            transmissionTable.addCell(new Cell().add(new Paragraph("Categorie Support").setBold()));

            for (Transmission transmission : siteRadio.getTransmissions()) {
                transmissionTable.addCell(new Cell().add(new Paragraph(String.valueOf(transmission.getPath()))));
                transmissionTable.addCell(new Cell().add(new Paragraph(String.valueOf(transmission.getCategorieSupport()))));
            }
            document.add(transmissionTable);
            document.add(new Paragraph("\n")); // Ajouter un espace après chaque SiteRadio
        }

        document.close();
        pdfDoc.close();

        return baos.toByteArray();
    }

}
