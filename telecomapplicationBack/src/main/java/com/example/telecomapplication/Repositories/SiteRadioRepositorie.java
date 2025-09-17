package com.example.telecomapplication.Repositories;

import com.example.telecomapplication.Entities.Antenne;
import com.example.telecomapplication.Entities.SiteRadio;
import com.example.telecomapplication.Entities.TypeSiteRadio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SiteRadioRepositorie extends JpaRepository<SiteRadio,Long> {


    @Query("SELECT s FROM SiteRadio s WHERE s.TypeSite = :typeSite")
    List<SiteRadio> findByTypeSite(@Param("typeSite") TypeSiteRadio typeSite);


}
