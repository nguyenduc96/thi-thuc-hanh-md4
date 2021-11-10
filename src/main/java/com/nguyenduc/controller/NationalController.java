package com.nguyenduc.controller;

import com.nguyenduc.model.National;
import com.nguyenduc.service.national.INationalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/national")
@CrossOrigin("*")
public class NationalController {
    @Autowired
    private INationalService nationalService;

    @GetMapping
    public ResponseEntity<Iterable<National>> getAll(){
        return ResponseEntity.ok(nationalService.findAll());
    }
}
