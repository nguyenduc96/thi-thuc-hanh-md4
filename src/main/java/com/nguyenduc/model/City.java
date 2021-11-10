package com.nguyenduc.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @ManyToOne
    private National national;

    @Column(nullable = false)
    private double area;

    @Column(nullable = false)
    private long population;

    @Column(nullable = false)
    private double gdp;

    @Column(columnDefinition = "TEXT")
    private String description;
}
