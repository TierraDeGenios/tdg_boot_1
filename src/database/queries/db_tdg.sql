DROP DATABASE IF EXISTS tdg_db;
CREATE DATABASE tdg_db;
USE tdg_db;

CREATE TABLE language (
	id  INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(45) NOT NULL,
	isActive TINYINT UNSIGNED NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE proficiency (
	id  INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
	proficiency VARCHAR(30) NOT NULL,
	isActive TINYINT UNSIGNED NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orientation (
	id  INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	isActive TINYINT UNSIGNED NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE recruiter (
	id  INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
	firstName VARCHAR(50) NOT NULL,
	lastName VARCHAR(50) NOT NULL,
	email VARCHAR(100) NOT NULL,
	imgURL VARCHAR(250) NOT NULL,
	avatarURL VARCHAR(250) NOT NULL,
	score DECIMAL(6,3) UNSIGNED NOT NULL,
	effectiveContracts SMALLINT UNSIGNED NOT NULL,
	about TEXT,
	gender TINYINT UNSIGNED NOT NULL,
	birthdate DATE NOT NULL,
	password VARCHAR(30) NOT NULL,
	isActive TINYINT UNSIGNED NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE techLead (
	id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
	firstName VARCHAR(50) NOT NULL,
	lastName VARCHAR(50) NOT NULL,
	email VARCHAR(100) NOT NULL,
	gender TINYINT UNSIGNED NOT NULL,
	birthdate DATE NOT NULL,
	imgURL VARCHAR(250),
	avatarURL VARCHAR (250) NOT NULL,
	password VARCHAR(30) NOT NULL,
	nickname VARCHAR(50) NOT NULL,
	isActive TINYINT UNSIGNED NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- CREO LA TABLA softSkill
CREATE TABLE softSkill(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT,
    isActive TINYINT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- CREO LA TABLA tech_language
CREATE TABLE tech_language(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    isActive TINYINT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE developer(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    averageScore DECIMAL(6,3) UNSIGNED NOT NULL,
    about TEXT,
    email VARCHAR(100) NOT NULL,
    imgURL VARCHAR(250) NOT NULL,
    avatarURL VARCHAR(250) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    gender TINYINT UNSIGNED NOT NULL,
    birthdate DATE NOT NULL,
    password VARCHAR(30) NOT NULL,
    country VARCHAR(100) NOT NULL,
    address VARCHAR(150),
    zipCode VARCHAR(10),
    nickname VARCHAR(50) NOT NULL,
    contractOnSite TINYINT UNSIGNED NOT NULL,
    contractRemote TINYINT UNSIGNED NOT NULL,
    contractHybrid TINYINT UNSIGNED NOT NULL,
    gitHubURL VARCHAR(250),
    linkedInURL VARCHAR(250),
    headline VARCHAR(100) NOT NULL,
    profileOwner TINYINT UNSIGNED NOT NULL,
    openToWork TINYINT UNSIGNED NOT NULL,
    isActive TINYINT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE hard_report_developer_techLead(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    techLeadId INT UNSIGNED NOT NULL ,
    developerId INT UNSIGNED NOT NULL ,
    notes TEXT,
    isActive TINYINT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (techLeadId) REFERENCES techLead(id),
    FOREIGN KEY(developerId) REFERENCES developer(id)
);

CREATE TABLE hardSkill(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    techLanguageId INT UNSIGNED NOT NULL ,
    name VARCHAR(30) NOT NULL,
    hide TINYINT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (techLanguageId) REFERENCES tech_language(id)
);

CREATE TABLE hardSkill_score(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    hardSkillId INT UNSIGNED NOT NULL ,
    idReportHard INT UNSIGNED NOT NULL ,
    score  DECIMAL(6,3) UNSIGNED NOT NULL,
    isActive TINYINT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (hardSkillId) REFERENCES hardSkill(id),
    FOREIGN KEY(idReportHard) REFERENCES hard_report_developer_techLead(id)
);

CREATE TABLE tech_has_orientation(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    hardSkillId INT UNSIGNED NOT NULL ,
    orientationId INT UNSIGNED NOT NULL ,
    isActive TINYINT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (hardSkillId) REFERENCES hardSkill(id),
    FOREIGN KEY(orientationId) REFERENCES orientation(id)
);

CREATE TABLE soft_report_developer_recruiter(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    recruiterId INT UNSIGNED NOT NULL ,
    developerId INT UNSIGNED NOT NULL ,
    notes TEXT,
    isActive TINYINT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (recruiterId) REFERENCES recruiter(id),
    FOREIGN KEY(developerId) REFERENCES developer(id)
);

CREATE TABLE softSkill_score(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    softSkillId INT UNSIGNED NOT NULL ,
    idSoftReport INT UNSIGNED NOT NULL ,
    score  DECIMAL(6,3) UNSIGNED NOT NULL,
    isActive TINYINT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (softSkillId) REFERENCES softSkill(id),
    FOREIGN KEY(idSoftReport) REFERENCES soft_report_developer_recruiter(id)
);

CREATE TABLE recuiterSelection(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    recruiterId INT UNSIGNED NOT NULL ,
    developerId INT UNSIGNED NOT NULL ,
    notes TEXT,
    authorization TINYINT UNSIGNED NOT NULL,
    hired TINYINT UNSIGNED NOT NULL,
    isActive TINYINT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (recruiterId) REFERENCES recruiter(id),
    FOREIGN KEY(developerId) REFERENCES developer(id)
);

CREATE TABLE work_experience (
	id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    developer_id INT UNSIGNED NOT NULL,
    `from` DATE NOT NULL,
    `to` DATE NOT NULL,
    current TINYINT UNSIGNED NOT NULL,
    description TEXT,
    company VARCHAR(50) NOT NULL,
    position VARCHAR(150) NOT NULL,
    paid TINYINT UNSIGNED NOT NULL,
    isActive TINYINT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (developer_id) REFERENCES developer(id)
);

CREATE TABLE education (
	id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
	developer_id INT UNSIGNED NOT NULL,
	`from` DATE NOT NULL,
	`to` DATE NOT NULL,
	institution VARCHAR(200) NOT NULL,
	diploma_URL VARCHAR(250),
	degree VARCHAR(200) NOT NULL,
	isActive TINYINT UNSIGNED NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (developer_id) REFERENCES developer(id)
);

CREATE TABLE dev_language(
	id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    language_id INT UNSIGNED NOT NULL, 
    developer_id INT UNSIGNED NOT NULL,
    proficiency_id INT UNSIGNED NOT NULL,
    isActive TINYINT UNSIGNED NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (language_id) REFERENCES language(id),
    FOREIGN KEY (developer_id) REFERENCES developer(id),
    FOREIGN KEY (proficiency_id) REFERENCES proficiency(id)
);