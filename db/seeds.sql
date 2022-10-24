INSERT INTO department (name)
VALUES ("Management"),("Front-of-house"),("Back-of-house");

INSERT INTO role (title, department_id, salary)
VALUES ("General Manager", 1, 80000),
    ("Assistant Manager", 1, 60000),
    ("Kitchen Manager", 1, 60000),
    ("Host", 2, 20000),
    ("Server", 2, 40000),
    ("Bartender", 2, 45000),
    ("Cook", 3, 35000),
    ("Prep", 3, 30000),
    ("Dish", 3, 20000);

    INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ("Brian", "Mitchell", 1, NULL),
        ("Morgan", "Smith", 2, 1),
        ("Cara", "Adams", 3, 1),
        ("Claire", "Bricks", 4, 2),
        ("Leo", "Jackson", 5, 2),
        ("Lindsey", "Turner", 2, 2),
        ("Alex", "Todd", 6, 2),
        ("Billy", "Bob", 7, 3),
        ("Eddie", "Valentino", 7, 3),
        ("Chad", "Johnson", 8, 3),
        ("Corey", "Ballast", 9, 3);

