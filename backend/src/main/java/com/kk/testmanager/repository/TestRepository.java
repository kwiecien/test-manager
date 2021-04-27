package com.kk.testmanager.repository;

import com.kk.testmanager.entity.Test;
import org.springframework.data.repository.CrudRepository;

public interface TestRepository extends CrudRepository<Test, Long> {
}
