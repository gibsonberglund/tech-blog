USE blog_db;

CREATE TABLE users(
    username VARCHAR(30) NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL,
    PRIMARY KEY (username)
);

CREATE TABLE posts(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    content TEXT NOT NULL,
    username VARCHAR(30),
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (username)
    REFERENCES users(username)
);

CREATE TABLE comments(
    id INT NOT NULL AUTO_INCREMENT,
    comment_creator VARCHAR(30) NOT NULL,
    post_id INT,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (post_id)
    REFERENCES posts(id)
);


INSERT INTO users (username, created_at, updated_at)
VALUES (1, "LepRECON", "2023-02-07 00:13:45", "2023-02-07 00:13:45"),
(2, "DaVinci", "2023-02-07 00:25:16", "2023-02-07 00:25:16");


INSERT INTO posts (id, title, content, username, created_at, updated_at)
VALUES (1, "JS For Beginners", "This is JS for beginners, you must already know HTML and CSS to follow this post.", "CrunchyDolphin", "2023-02-08 00:33:16", "2023-02-08 00:33:16"),
(2, "Tests", "Tests are an essential part of the development process, and should always be built before the application itself.", "GellinWithMagellan", "2023-02-08 00:45:16", "2023-02-08 00:45:16");