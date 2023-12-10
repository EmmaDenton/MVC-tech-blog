DROP DATABASE IF EXISTS techblog_db;

CREATE DATABASE techblog_db;

USE techblog_db;

CREATE TABLE User (
    id (INT, primary key, auto-increment),
    username (VARCHAR),
    email (VARCHAR),
    password (VARCHAR),
    created_at (DATETIME),
    updated_at (DATETIME),
);



CREATE TABLE Posts (
    id (INT, primary key, auto-increment),
    user_id (INT, foreign key to Users),
    title (VARCHAR),
    content (TEXT),
    created_at (DATETIME),
    updated_at (DATETIME),
);


CREATE TABLE Availability (
    id (INT, primary key, auto-increment),
    post_id (INT, foreign key to Posts),
    user_id (INT, foreign key to Users),
    comment (TEXT),
    created_at (DATETIME),
    updated_at (DATETIME),
);