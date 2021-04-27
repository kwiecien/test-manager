package com.kk.testmanager.controller;

import com.kk.testmanager.entity.Test;
import com.kk.testmanager.repository.TestRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestManagerController {
    private final TestRepository repository;

    public TestManagerController(TestRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/tests")
    public Iterable<Test> all() {
        return repository.findAll();
    }

    @PostMapping("/tests")
    public Test newTest(@RequestBody Test test) {
        return repository.save(test);
    }
}
