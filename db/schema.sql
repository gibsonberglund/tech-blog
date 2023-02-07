DROP DATABASE IF EXISTS blog_db;
CREATE DATABASE blog_db;

USE blog_db;

CREATE TABLE users(
    id INT NOT NULL,
    user_name VARCHAR(30) NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL,
    PRIMARY KEY (user_name)
);

CREATE TABLE posts(
    id INT NOT NULL,
    title VARCHAR(30) NOT NULL,
    content TEXT NOT NULL,
    user_name VARCHAR(30) NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_name)
    REFERENCES users(user_name)
);

CREATE TABLE comments(
    id INT NOT NULL,
    comment_creator VARCHAR(30) NOT NULL,
    post_id INT,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (post_id)
    REFERENCES posts(id)
);