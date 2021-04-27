DROP TABLE IF EXISTS test;

CREATE TABLE test
(
    id IDENTITY AUTO_INCREMENT PRIMARY KEY,
    status VARCHAR(32) NOT NULL
);

INSERT INTO test (id, status)
VALUES ('1', 'UNDEFINED'),
       ('2', 'PASSED'),
       ('3', 'FAILED');