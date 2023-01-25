INSERT INTO developer (firstName, lastName, averageScore, about, email, imgURL, avatarURL, phone, gender, birthdate, password, country, address, zipCode, nickname, contractOnSite, contractRemote, contractHybrid, gitHubURL, linkedInURL, headline, openToWork, isActive)
VALUES 
("Fernando", "Gorondo", 000.000, "Sobre mí: Auto-motivado. En constante busqueda de nuevos desafios. Autodidacta. Partidario de generar comunidades y ayudarnos mutuamente. Nivel de Inglés: C1 Advanced. Pensamiento critico. Resolución de problemas", "fgorondo@gmail.com", "https://www.pexels.com/es-es/foto/hombre-sonriendo-detras-de-la-pared-220453/", "https://www.freepik.com/free-vector/businessman-character-avatar-isolated_6769264.htm#query=avatar&position=19&from_view=keyword", "+541134652789", 0, "1990-12-24", "Mipassword!", "Argentina", "San Martín 1354", "ABC1876", "Carpincho verde", 0, 1, 1, "https://github.com/fgorondo", "https://www.linkedin.com/in/flgorordo/", "Full Stack Developer", 1, 1),
("Boris", "Colodro", 000.000, "Soy estudiante de ingeniera en computación en la UNLP y de Desarrollador web recibido de Digital House, apasionado de las programación y los nuevas tecnologías. Estoy en búsqueda de mi primer experiencia IT para seguir desarrollándome profesionalmente.", "bgcolodro@gmail.com", "https://www.pexels.com/es-es/foto/hombre-de-camisa-polo-marron-614810/", "https://www.freepik.com/free-vector/businessman-character-avatar-isolated_6769264.htm#query=avatar&position=19&from_view=keyword", "+5436529788", 0, "1995-08-12", "Mipassword3!", "Argentina", "Serrano 1354", "ABC1576", "Carpincho amarillo", 1, 1, 1, "https://github.com/bgcolodro", "https://www.linkedin.com/in/boris-colodro", "Full Stack Web Developer", 1, 1),
("María", "Dumas", 000.000, "Me formé recientemente como Full Stack Web Developer (Digital House) y, antes, como Doctora en Letras (UBA). En los últimos años trabajé como investigadora, docente y gestora en distintos ámbitos académicos. Mi desafío actual es reinventarme profesionalmente a través del desarrollo web. Destaco mi capacidad para adaptarme a distintos ámbitos laborales y a diferentes configuraciones de trabajo. Disfruto el trabajo en equipo, en el rol que se requiera, pero también me organizo bien para trabajar en forma individual en función de objetivos. Me gusta trabajar; asumo el trabajo con entusiasmo, como una oportunidad para aprender y conocer nuevos horizontes.", "dumasmaria@gmail.com", "https://www.pexels.com/es-es/foto/mujer-en-camisa-con-cuello-774909/", "https://sp.depositphotos.com/268739230/stock-illustration-isolated-beauty-avatar-of-a.html", "+541162660333", 1, "1980-02-09", "Mipassword4!", "Argentina", "José Manuel Estrada 2515, piso 5, depto 1", "BCB1636", "Mariposa negra", 1, 1, 1, "https://github.com/mariadumas", "https://www.linkedin.com/in/mariadumas", "Full Stack Developer", 1, 1),
("Nicole", "Feldman", 000.000, "Full Stack Developer JR with experience in the fintech industry.  Advanced Marketing student focused on digital marketing and data science.  I am an extremely restless person always settings goals to reach my objectives, having the ability to learn and adapt and with a lot of experience in teamwork.  Since the beginning of the pandemic I have been volunteering in different NGOs looking to help build a better world. I want to keep updating myself to face new challenges in the world of technology and marketing.", "feldman.nicky@gmail.com", "https://www.pexels.com/es-es/foto/mujer-en-camisa-con-cuello-774909/", "https://sp.depositphotos.com/268739230/stock-illustration-isolated-beauty-avatar-of-a.html", "+541134672788", 1, "1993-10-05", "Mipassword6!", "Argentina", "Entre Ríos 1354", "CBC1476", "Mapache rojo", 1, 0, 1, "https://github.com/nfledman", "https://www.linkedin.com/in/feldman-nicole", "Digital Marketer | Full Stack Developer | Product Manager", 1, 1),
("Paula", "Yafar", 000.000, "I studied Full Stack Development, and I have training in Graphic Design. I have plenty experience working in multidisciplinary teams, always paying attention to details and working goal-oriented, looking up for chances for improvement and learning in each experience. I am always looking to update myself and reach new goals and objetives, and I have the ability to learn new things, adapt to different work enviroments, with great communication skills. I also have a degree in Psychology, and I work independently in the clinical care of adolescents and adults, particularly with depressive, stress and anxiety disorders.", "pyafar@gmail.com", "https://www.pexels.com/es-es/foto/mujer-en-camisa-con-cuello-774909/", "https://sp.depositphotos.com/268739230/stock-illustration-isolated-beauty-avatar-of-a.html", "+541134652788", 1, "1992-12-09", "Mipassword2!", "Argentina", "Belgrano 1354", "ABC1476", "Yacaré azul", 1, 1, 1, "https://github.com/pyafar", "https://www.linkedin.com/in/pyafar", "Front-end Developer", 1, 1);

INSERT INTO role (name, isActive) 
VALUES
("Recuiter", 1),
("Tech leader", 1);

INSERT INTO reviewer (roleId, firstName, lastName, email, imgURL, avatarURL, score, effectiveContracts, about, gender, birthdate, password, nickname, isActive) VALUES 
(1, "Barbara","Nelson","barbara@gmail.com","https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 0 , 1,"",1, "1991-01-20", "123456789", "Barbara", 1),
(1, "Keith","Smith","keith@gmail.com","https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 0 , 0,"",1, "1996-05-18", "987654321", "Keith", 1),
(2, "Kathy","Alexander","kathy@gmail.com","https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 0 , 0,"",1, "1995-09-9", "123789456", "Kathy", 1),
(1, "Edward","Miller","edward@gmail.com","https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 0 , 0,"",0, "1991-10-23", "987321654", "Edward", 1),
(2, "Gregory","Wood","gregory@gmail.com","https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 0 , 0,"",0, "1993-04-5", "147258369", "Gregory", 1);



INSERT INTO tech_language (name, isActive)
VALUES
("Javascript", 1),
("Java", 1),
("Python", 1),
("CSS", 1),
("Ruby on Rails", 1),
("PHP", 1);



INSERT INTO orientation (name, isActive)
VALUES
("Front End", 1),
("Back End", 1),
("Full Stack", 1),
("Devops", 1),
("Data Science", 1);



INSERT INTO language (name, isActive)
VALUES
("Inglés", 1),
("Chino", 1),
("Alemán", 1),
("Español", 1),
("Hebreo", 1);

INSERT INTO proficiency (proficiency, isActive)
VALUES
("A1", 1),
("A2", 1),
("B1", 1),
("B2", 1),
("C1", 1),
("C2", 1),
("Básico", 1),
("Intermedio", 1),
("Avanzado", 1);



INSERT INTO user_language (languageId, developerId, reviewerId, roleId, proficiencyId, isActive)
VALUES
(1, 1, null, null, 5, 1),
(4, 1, null, null, 6, 1),
(4, 2, null, null, 6, 1),
(1, 3, null, null, 6, 1),
(1, null, 1, 1, 5, 1),
(1, null, 2, 2, 1, 1);


INSERT INTO education (developerId, `from`, `to`, current, institution, diploma_URL, degree, isActive)
VALUES
(3, "2022-03-01", "2022-08-22", 0, "Digital House", "https://www.shutterstock.com/es/image-vector/certificate-diploma-retro-vintage-design-template-1176277369", "Full stack web developer", 1),
(3, "2011-03-01", "2016-03-22", 0, "Universidad de Buenos Aires", "https://www.shutterstock.com/es/image-vector/certificate-diploma-retro-vintage-design-template-1176277369", "Doctora en Letras", 1),
(3, "1999-03-01", "2008-08-22", 0, "Universidad de Buenos Aires", "https://www.shutterstock.com/es/image-vector/certificate-diploma-retro-vintage-design-template-1176277369", "Licenciada en Letras", 1),
(2, "2022-03-01", null, 1, "Universidad Nacional de La Plata", null, "Ingeniería en Computación", 1),
(2, "2022-03-01", "2022-08-22", 0, "Digital House", "https://www.shutterstock.com/es/image-vector/certificate-diploma-retro-vintage-design-template-1176277369", "Full stack web developer", 1),
(1, "2022-03-01", "2022-08-22", 0, "Digital House", "https://www.shutterstock.com/es/image-vector/certificate-diploma-retro-vintage-design-template-1176277369", "Full stack web developer", 1);

INSERT INTO work_experience (developerId, `from`, `to`, current, description, company, position, paid, isActive)
VALUES 
(3, "2011-04-01", "2016-03-31", 0, "Recibí sucesivas becas doctorales de CONICET para la ejecución de mi proyecto de doctorado en la Universidad de Buenos Aires.", "CONICET", "Becaria doctoral", 1, 1),
(3, "2016-04-01", "2018-03-31", 0, "Recibí una beca posdoctoral de CONICET para la ejecución de mi proyecto posdoctoral.", "CONICET", "Becaria posdoctoral", 1, 1),
(3, "2020-03-01", null, 1, "Me encuentro a cargo de la gestión integral de la Maestría en Estudios Medievales de la Facultad de Filosofía y Letras de la UBA.", "Universidad de Buenos Aires", "Secretaria académica", 1, 1),
(2, "2022-12-15", null, 1, "Formo parte del bootcamp de TDG en el cual estamos desarrollando una aplicación web de gestión para el reclutamiento de desarrolladores.", "Tierra de Genios", "Developer", 0, 1),
(2, "2022-12-15", "2022-08-22", 0, "Practica no laboral. Proyecto integrador realizado en el marco del curso de Desarrollo web full stack", "Lumos", "Developer", 0, 1);



INSERT INTO skill (orientationId, techLanguageId, name, description, skillType, isActive)
VALUES 
(1, 4, "CSS", null, 0, 1),
(null, null, "Comunicación", null, 1, 1),
(null, null, "Trabajo en equipo", null, 1, 1),
(1, 1, "Javascript", null, 0, 1),
(2, 1, "Javascript", null, 0, 1);


INSERT INTO recruiterSelection (reviewerId, developerId, notes, authorization, status, isActive) 
VALUES 
(2, 5, null, 1, 0, 1),
(1, 3, null, 0, 0, 1),
(1, 1, null, 1, 1, 1),
(4, 3, null, 1, 0, 1),
(4, 2, null, 1, 0, 1);

INSERT INTO profile_ownership (developerId, reviewerId, ownerCategory, percentage, isActive) 
VALUES 
(1, 2, 1, 100, 1),
(2, 2, 1, 100, 1),
(3, 2, 1, 100, 1),
(4, 4, 1, 100, 1),
(5, 1, 1, 100, 1);

INSERT INTO skills_report_developer_reviewer (developerId, reviewerId, notes, reportType, isActive) 
VALUES 
(1, 1, "notes1", 1, 1),
(5, 2, "notes2", 1, 1),
(3, 4, "notes3", 1, 1),
(2, 4, "notes4", 1, 1),
(1, 3, "notes5", 0, 1);

INSERT INTO skill_score (reportId, skillId, score, isActive)
VALUES
(1, 4, 87.000, 1),
(1, 1, 67.000, 1),
(1, 2, 75.000, 1),
(2, 2, 84.000, 1),
(2, 1, 77.000, 1),
(2, 2, 73.000, 1),
(3, 1, 67.000, 1);






