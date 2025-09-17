package com.example.telecomapplication.Repositories;

import com.example.telecomapplication.Entities.Antenne;
import com.example.telecomapplication.Entities.Transmission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TransmissionRepositorie extends JpaRepository<Transmission,Long> {
    Optional<Transmission> findTransmissionByIdTransmission(Long idTransmission);
}
