CREATE TABLE houses (
    id SERIAL PRIMARY KEY, 
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip INT,
    img text,
    mortgage decimal,
    rent decimal
    )