package com.kk.testmanager.controller;

import com.kk.testmanager.entity.ExecutionStatus;
import com.kk.testmanager.entity.Test;
import com.kk.testmanager.repository.TestRepository;
import org.springframework.web.bind.annotation.*;

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
    public Test newTest() {
        Test test = new Test(ExecutionStatus.UNDEFINED);
        return repository.save(test);
    }

    @PutMapping("/tests/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public Test updateTest(@PathVariable long id, @RequestBody ExecutionStatus status) {
        Test test = new Test(id, status);
        return repository.save(test);
    }
}
