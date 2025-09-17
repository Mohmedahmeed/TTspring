package com.example.telecomapplication.Services;

import com.example.telecomapplication.Entities.Derangement;
import com.example.telecomapplication.Entities.SiteRadio;
import com.example.telecomapplication.Entities.TypeSiteRadio;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface ISiteRadioService {


    List<SiteRadio> getAllSiteRadios();
    Optional<SiteRadio> getSiteRadioById(Long idSiteRadio);
    SiteRadio CreateSiteRadio (SiteRadio siteRadio);
    SiteRadio UpdateSiteRadio(Long idSiteRadio,SiteRadio siteRadio);

    void DeleteSiteRadio(Long idSiteRadio);

    Optional<SiteRadio> getSiteRadioForAntenne(Long idAntenne);
    Optional<SiteRadio> getSiteRadioForTransmission(Long idTransmission);
    List<SiteRadio> searchSiteRadio(TypeSiteRadio typeSite);

    byte[] exportSiteRadios() throws IOException;


}
