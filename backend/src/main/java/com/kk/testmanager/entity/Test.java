package com.kk.testmanager.entity;

import com.kk.testmanager.type.ExecutionStatus;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class Test {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    private ExecutionStatus status;

    public Test(ExecutionStatus status) {
        this.status = status;
    }
}