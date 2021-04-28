package com.kk.testmanager.entity;

public enum ExecutionStatus {
    UNDEFINED("UNDEFINED"),
    FAILED("FAILED"),
    PASSED("PASSED");

    private final String status;

    ExecutionStatus(final String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return status;
    }
}
