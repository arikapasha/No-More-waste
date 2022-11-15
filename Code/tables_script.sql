create table post(
post_id int not null auto_increment,
item_name varchar(100) not null,
description varchar(300) not null,
photo_link varchar(300),
pickup_time datetime not null,
requested bool,
accepted bool,
shelter_id int,
rest_id int,
driver_id int,
primary key (post_id),
foreign key (shelter_id) references user(user_id),
foreign key (rest_id) references user(user_id),
foreign key (driver_id) references user(user_id)
);

create table user(
user_id int not null auto_increment,
businessname varchar(30) not null, 
address varchar(100) not null,
username varchar(100) not null,
phone_number varchar(10) not null,
email varchar(100) not null,
password varchar(30) not null,
role varchar(1) not null,
primary key (user_id)
);