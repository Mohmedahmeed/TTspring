package com.example.telecomapplication.Repositories;

import com.example.telecomapplication.Entities.Antenne;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AntenneRepositorie extends JpaRepository<Antenne,Long> {
    Optional<Antenne> findAntenneByidAntenne(Long idAntenne);
}
