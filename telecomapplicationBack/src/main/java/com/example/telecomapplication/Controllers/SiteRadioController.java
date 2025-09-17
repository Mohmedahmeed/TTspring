package com.example.telecomapplication.Controllers;

import com.example.telecomapplication.Entities.Derangement;
import com.example.telecomapplication.Entities.SiteRadio;
import com.example.telecomapplication.Entities.TypeSiteRadio;
import com.example.telecomapplication.Services.IDerangementService;
import com.example.telecomapplication.Services.ISiteRadioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/siteradio")
public class SiteRadioController {

    @Autowired
    ISiteRadioService siteRadioService;

    @GetMapping("/getSiteRadio")
    public List<SiteRadio> getAllSiteRadios() {
        return siteRadioService.getAllSiteRadios();
    }

    @GetMapping("/getSiteRadio/{idSiteRadio}")
    public SiteRadio getSiteRadioById(@PathVariable Long idSiteRadio) {
        return siteRadioService.getSiteRadioById(idSiteRadio).orElse(null);
    }

    @PostMapping("createSiteRadio")
    public SiteRadio CreateSiteRadio(@RequestBody SiteRadio siteRadio) {
        return siteRadioService.CreateSiteRadio(siteRadio);
    }

    @DeleteMapping("/deleteSiteRadio/{idSiteRadio}")
    public void DeleteSiteRadio(@PathVariable Long idSiteRadio) {
        siteRadioService.DeleteSiteRadio(idSiteRadio);
    }

    @PutMapping("updateSiteRadio/{idSiteRadio}")
    public SiteRadio UpdatSiteRadio(@PathVariable Long idSiteRadio, @RequestBody SiteRadio siteRadio) {
        return siteRadioService.UpdateSiteRadio(idSiteRadio, siteRadio);
    }

    @GetMapping("/siteradio/{idAntenne}")
    public ResponseEntity<SiteRadio> getSiteRadioForAntenne(@PathVariable Long idAntenne) {
        Optional<SiteRadio> siteRadio = siteRadioService.getSiteRadioForAntenne(idAntenne);
        if (siteRadio.isPresent()) {
            return ResponseEntity.ok(siteRadio.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/siteradioo/{idTransmission}")
    public ResponseEntity<SiteRadio> getSiteRadioForTransmission(@PathVariable Long idTransmission) {
        Optional<SiteRadio> siteRadio = siteRadioService.getSiteRadioForTransmission(idTransmission);
        if (siteRadio.isPresent()) {
            return ResponseEntity.ok(siteRadio.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/search")
    public List<SiteRadio> searchSiteRadio(@RequestParam TypeSiteRadio typeSite) {
        return siteRadioService.searchSiteRadio(typeSite);
    }


    @GetMapping("/export-pdf")
    public ResponseEntity<byte[]> exportSiteRadioData() {
        try {
            // Appeler la méthode pour exporter les données SiteRadio
            byte[] pdfBytes = siteRadioService.exportSiteRadios(); // Utiliser la méthode exportSiteRadios()

            String fileName = "site-radio-list.pdf";

            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-Disposition", "attachment; filename=" + fileName);
            headers.setContentType(MediaType.APPLICATION_PDF);

            return ResponseEntity.ok()
                    .headers(headers)
                    .contentType(MediaType.APPLICATION_PDF)
                    .body(pdfBytes);
        } catch (IOException e) {
            // Gérer l'exception si quelque chose se passe mal
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erreur lors de la génération du PDF".getBytes());
        }
    }
}





