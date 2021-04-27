package com.kk.testmanager.type;

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