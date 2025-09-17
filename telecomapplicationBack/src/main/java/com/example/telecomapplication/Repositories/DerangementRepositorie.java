package com.example.telecomapplication.Repositories;

import com.example.telecomapplication.Entities.Derangement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DerangementRepositorie extends JpaRepository<Derangement,Long> {

}
