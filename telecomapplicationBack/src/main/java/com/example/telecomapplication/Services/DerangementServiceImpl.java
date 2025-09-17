package com.example.telecomapplication.Services;

import com.example.telecomapplication.Entities.Derangement;
import com.example.telecomapplication.Entities.SiteRadio;
import com.example.telecomapplication.Repositories.DerangementRepositorie;
import com.example.telecomapplication.Repositories.SiteRadioRepositorie;
import com.example.telecomapplication.dto.DerangementDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DerangementServiceImpl implements IDerangementService {
    @Autowired
    DerangementRepositorie derangementRepositorie;
    @Autowired
    SiteRadioRepositorie siteRadioRepositorie;



    @Override
    public List<DerangementDto> getAllDerangements() {
        List<Derangement> derangements = derangementRepositorie.findAll();

        // Convertir les entités Derangement en DerangementDTO
        return derangements.stream().map(derangement -> {
            return new DerangementDto(
                    derangement.getIdDerangement(),
                    derangement.getDateDerangement(),
                    derangement.getProbAcces(),
                    derangement.getAction(),
                    derangement.getTypeDerangement(),
                    derangement.getSiteRadio() != null ? derangement.getSiteRadio().getIdSiteRadio() : null
            );
        }).collect(Collectors.toList());
    }


    @Override
    public Optional<Derangement> getDerangementById(Long idDerangement) {
        return derangementRepositorie.findById(idDerangement);
    }

    @Override
    public Derangement CreateDerangement(Derangement derangement,Long idSiteRadio) {
        Optional<SiteRadio> siteRadio = siteRadioRepositorie.findById(idSiteRadio);

        if (siteRadio.isPresent()) {
            derangement.setSiteRadio(siteRadio.get()); // Lier le derangement au SiteRadio existant
            return derangementRepositorie.save(derangement);
        } else {
            throw new RuntimeException("Le SiteRadio avec ID " + idSiteRadio + " n'existe pas");
        }
    }




    @Override
    public Derangement UpdateDerangement(Long idDerangement, Derangement derangement) {
        Optional<Derangement> existingDerangementOptional = derangementRepositorie.findById(idDerangement);
        if (existingDerangementOptional.isPresent()){
            Derangement existingDerangement = existingDerangementOptional.get();
            // Mettre à jour les champs nécessaires du derangement existant
            existingDerangement.setDateDerangement(derangement.getDateDerangement());
            existingDerangement.setTypeDerangement(derangement.getTypeDerangement());
            existingDerangement.setAction(derangement.getAction());
            existingDerangement.setProbAcces(derangement.getProbAcces());

            // Enregistrer les modifications dans la base de données
            return derangementRepositorie.save(existingDerangement);

    } else {
        // Gérer le cas où le derangement n'est pas trouvé
        return null;
    }
    }

    @Override
    public void DeleteDerangement(Long idDerangement) {
       derangementRepositorie.deleteById(idDerangement);
    }

}
