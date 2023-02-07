DROP DATABASE IF EXISTS blog_db;
CREATE DATABASE blog_db;

USE blog_db;

CREATE TABLE users(
    id INT NOT NULL,
    username VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE posts(
    id INT NOT NULL,
    post_title VARCHAR(30) NOT NULL,
    post_content TEXT NOT NULL,
    post_date VARCHAR(30) NOT NULL,
    user_id VARCHAR(30) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id)
    REFERENCES users(id)
);

CREATE TABLE comments(
    id INT NOT NULL,
    comment_creator VARCHAR(30) NOT NULL,
    comment_date VARCHAR(30) NOT NULL,
    post_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (post_id)
    REFERENCES posts(id)
);