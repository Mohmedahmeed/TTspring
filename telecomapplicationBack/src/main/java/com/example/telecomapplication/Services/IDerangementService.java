package com.example.telecomapplication.Services;

import com.example.telecomapplication.Entities.Derangement;
import com.example.telecomapplication.dto.DerangementDto;

import java.util.List;
import java.util.Optional;

public interface IDerangementService {
    List<DerangementDto> getAllDerangements();
    Optional<Derangement> getDerangementById(Long idDerangement);
    Derangement CreateDerangement (Derangement derangement,Long idSiteRadio);
    Derangement UpdateDerangement(Long idDerangement,Derangement derangement);

    void DeleteDerangement(Long idDerangement);
}
