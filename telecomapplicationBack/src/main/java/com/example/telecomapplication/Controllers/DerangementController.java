package com.example.telecomapplication.Controllers;

import com.example.telecomapplication.Entities.Derangement;
import com.example.telecomapplication.Entities.SiteRadio;
import com.example.telecomapplication.Services.IDerangementService;
import com.example.telecomapplication.Services.ISiteRadioService;
import com.example.telecomapplication.dto.DerangementDto;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/derangement")
public class DerangementController {
    @Autowired
    IDerangementService derangementService;
    @Autowired
    ISiteRadioService siteRadioService;

@GetMapping("/getderangement")
public List<DerangementDto> getAllDerangements() {
    return derangementService.getAllDerangements();
    }


@GetMapping("/getderangement/{idDerangement}")
    public Derangement getDerangementById(@PathVariable Long idDerangement){
    return  derangementService.getDerangementById(idDerangement).orElse(null);
    }



    @PostMapping("createderangement/{idSiteRadio}")
    public ResponseEntity<Derangement> createDerangement(@PathVariable Long idSiteRadio, @RequestBody Derangement derangement) {
        Optional<SiteRadio> siteRadio = siteRadioService.getSiteRadioById(idSiteRadio);

        if (siteRadio.isPresent()) {
            derangement.setSiteRadio(siteRadio.get());
            Derangement createdDerangement = derangementService.CreateDerangement(derangement,idSiteRadio);
            return ResponseEntity.ok(createdDerangement);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @DeleteMapping("/deletederangement/{idDeranegement}")
    public void DeleteDerangement(@PathVariable Long idDeranegement) {
        derangementService.DeleteDerangement(idDeranegement);
    }
    @PutMapping("updatederangement/{idDerangement}")
    public Derangement UpdatDerangement(@PathVariable Long idDerangement, @RequestBody Derangement derangement) {
        return derangementService.UpdateDerangement(idDerangement,derangement);
    }

}
