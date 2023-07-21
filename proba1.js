


const cats = [
    {
        "name": "Лара",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2021-09/167200DD-A44F-4845-8D4D-ACCFC180165A.jpeg",
        "age": 8,
        "rate": 7,
        "favourite": false,
        "description": "Лара – шотландская вислоухая, у нее остеохондродисплазия. Лара спокойная, очень ласковая и контактная. Болезнь не лечится и специального ухода не нужно.",
        "id": 1
    },
    {
        "name": "Базиль",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/064AEBCB-45EC-4CE7-AB13-C65F10F00B7B.jpeg",
        "age": 2,
        "rate": 10,
        "favourite": false,
        "description": "Внимательный, активный и ласковый. Любит играть, катать мяч, и мурчать на пледе рядом с людьми! Прилично воспитан, приучен к лотку. Вакцинирован, имеет ветеринарный паспорт.",
        "id": 2
    },
    {
        "name": "Риш",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/_DM34706.JPG",
        "age": 1,
        "rate": 10,
        "favourite": true,
        "description": "Риш любит лесенки, канаты. Очень активный и дружелюбный кот. Риш полностью здоров, привит, кастрирован. Использует лоточек и очень аккуратен.",
        "id": 3
    },
    {
        "name": "Элли",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/1_25.jpg",
        "age": 4,
        "rate": 8,
        "favourite": false,
        "description": "Элли обладает мягким и добрым характером. Очень любит всевозможные лакомства и вкусно покушать. Не доверяет людям, потребуется время, чтобы стать ей другом. Приучена к лотку и когтеточке",
        "id": 4
    },
    {
        "name": "Чарли",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/%D0%BB%D0%B5%D0%B2%D0%B83_%D0%B0%D0%BB%D0%B5%D0%BA%D1%81.jpg",
        "age": 1,
        "rate": 8,
        "favourite": false,
        "description": "Чёрно-белый юный котофилософ очень любит размышлять и быть наедине. Пока что не доверяет людям, не агрессивный. Ладит с другими животными, приучен к лотку и когтеточке",
        "id": 5
    },
    {
        "name": "Стефани",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/4_30.jpg",
        "age": 6,
        "rate": 9,
        "favourite": false,
        "description": "Прелестная Стефани – трогательная, добродушная и очень-очень общительная девочка как никто другой нуждается в заботе и любви. Приучена к лотку и когтеточке",
        "id": 6
    },
    {
        "name": "Дуся",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-02/B1444207-6EE3-4BA4-97F7-2F9666AE2F63.jpeg",
        "age": 1,
        "rate": 9,
        "favourite": false,
        "description": "Дусеньке около 1 года с небольшим, здорова, привита, стерилизована. Лоточек и когтеточку знает прекрасно. Очень общительная и нежная, хочет постоянного внимания.",
        "id": 7
    },
    {
        "name": "Бруно",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/IMG-20211223-WA0049.jpg",
        "age": 1,
        "rate": 10,
        "favourite": false,
        "description": "Очаровательный активный кот Бруно, находится в постоянном движении! Очаровательный и ласковый кот. Приучен к лотку, ладит с другими котами, привит.",
        "id": 8
    },
    {
        "name": "Лара",
        "img_link": "https://www.friendforpet.ru/api/sites/default/files/2022-01/%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D1%8F%D1%87%D0%BE%D0%BA4_%D0%B0%D0%BB%D0%B5%D0%BA%D1%81.jpg",
        "age": 1,
        "rate": 9,
        "favourite": true,
        "description": "Немного боязливый, но очень добрый и нежный кот Светлячок. Приучен к лотку и когтеточке, ладит с детьми, привит. Станет вам хорошим другом",
        "id": 9
    }
]

cat0 = cats[0]

var name0 = document.getElementById('divname');
name0.innerHTML =  cat0.id + " " + cat0.name;

var img = document.createElement('img');
img.src = cat0.img_link
img.width = 400
img.height=400
container = document.querySelector('#image-container');
container.append(img);
    
var age0 = document.getElementById('divage');
age0.innerHTML =  cat0.age + " лет"

var rate0 = document.getElementById('divrate');
rate0.innerHTML =  cat0.rate + " баллов"


var favourite0 = document.getElementById('favourite');
 if (cat0.favourite == true) {
    favourite0.innerHTML =  "фаворит"
 }

var description0 = document.getElementById('description');
description0.innerHTML =  cat0.description



cat1 = cats[1]

var name1 = document.getElementById('divname1');
name1.innerHTML =  cat1.id + " " + cat1.name;

var img1 = document.createElement('img');
img1.src = cat1.img_link
img1.width = 400
img1.height=400
container1 = document.querySelector('#image-container1');
container1.append(img1);
    
var age1 = document.getElementById('divage1');
age1.innerHTML =  cat1.age + " года"

var rate1 = document.getElementById('divrate1');
rate1.innerHTML =  cat1.rate + " баллов"


var favourite1 = document.getElementById('favourite1');
 if (cat1.favourite == true) {
    favourite1.innerHTML =  "фаворит"
 }

var description1 = document.getElementById('description1');
description1.innerHTML =  cat1.description


cat2 = cats[2]

var name2 = document.getElementById('divname2');
name2.innerHTML =  cat2.id + " " + cat2.name;

var img2 = document.createElement('img');
img2.src = cat2.img_link
img2.width = 600
img2.height=400
container2 = document.querySelector('#image-container2');
container2.append(img2);
    
var age2 = document.getElementById('divage2');
age2.innerHTML =  cat2.age + " год"

var rate2 = document.getElementById('divrate2');
rate2.innerHTML =  cat2.rate + " баллов"


var favourite2 = document.getElementById('favourite2');
 if (cat2.favourite == true) {
    favourite2.innerHTML =  "фаворит"
 }

var description2 = document.getElementById('description2');
description2.innerHTML =  cat2.description


cat3 = cats[3]

var name3 = document.getElementById('divname3');
name3.innerHTML =  cat3.id + " " + cat3.name;

var img3 = document.createElement('img');
img3.src = cat3.img_link
img3.width = 300
img3.height=400
container3 = document.querySelector('#image-container3');
container3.append(img3);
    
var age3 = document.getElementById('divage3');
age3.innerHTML =  cat3.age + " года"

var rate3 = document.getElementById('divrate3');
rate3.innerHTML =  cat3.rate + " баллов"


var favourite3 = document.getElementById('favourite2');
 if (cat3.favourite == true) {
    favourite3.innerHTML =  "фаворит"
 }

var description3 = document.getElementById('description3');
description3.innerHTML =  cat3.description


cat4 = cats[4]

var name4 = document.getElementById('divname4');
name4.innerHTML =  cat4.id + " " + cat4.name;

var img4 = document.createElement('img');
img4.src = cat4.img_link
img4.width = 300
img4.height=400
container4 = document.querySelector('#image-container4');
container4.append(img4);
    
var age4 = document.getElementById('divage4');
age4.innerHTML =  cat4.age + " год"

var rate4 = document.getElementById('divrate4');
rate4.innerHTML =  cat4.rate + " баллов"


var favourite4 = document.getElementById('favourite4');
 if (cat4.favourite == true) {
    favourite4.innerHTML =  "фаворит"
 }

var description4 = document.getElementById('description4');
description4.innerHTML =  cat4.description


cat5 = cats[5]

var name5 = document.getElementById('divname5');
name5.innerHTML =  cat5.id + " " + cat5.name;

var img5 = document.createElement('img');
img5.src = cat5.img_link
img5.width = 400
img5.height=400
container5 = document.querySelector('#image-container5');
container5.append(img5);
    
var age5 = document.getElementById('divage5');
age5.innerHTML =  cat5.age + " лет"

var rate5 = document.getElementById('divrate5');
rate5.innerHTML =  cat5.rate + " баллов"


var favourite5 = document.getElementById('favourite5');
 if (cat5.favourite == true) {
    favourite5.innerHTML =  "фаворит"
 }

var description4 = document.getElementById('description5');
description5.innerHTML =  cat5.description


cat6 = cats[6]

var name6 = document.getElementById('divname6');
name6.innerHTML =  cat6.id + " " + cat6.name;

var img6 = document.createElement('img');
img6.src = cat6.img_link
img6.width = 400
img6.height=400
container6 = document.querySelector('#image-container6');
container6.append(img6);
    
var age6 = document.getElementById('divage6');
age6.innerHTML =  cat6.age + " год"

var rate6 = document.getElementById('divrate6');
rate6.innerHTML =  cat6.rate + " баллов"


var favourite6 = document.getElementById('favourite6');
 if (cat6.favourite == true) {
    favourite6.innerHTML =  "фаворит"
 }

var description6 = document.getElementById('description6');
description6.innerHTML =  cat6.description



cat7 = cats[7]

var name7 = document.getElementById('divname7');
name7.innerHTML =  cat7.id + " " + cat7.name;

var img7 = document.createElement('img');
img7.src = cat7.img_link
img7.width = 300
img7.height=400
container7 = document.querySelector('#image-container7');
container7.append(img7);
    
var age7 = document.getElementById('divage7');
age7.innerHTML =  cat7.age + " год"

var rate7 = document.getElementById('divrate7');
rate7.innerHTML =  cat7.rate + " баллов"


var favourite7 = document.getElementById('favourite7');
 if (cat7.favourite == true) {
    favourite7.innerHTML =  "фаворит"
 }

var description7 = document.getElementById('description7');
description7.innerHTML =  cat7.description


cat8 = cats[8]

var name8 = document.getElementById('divname8');
name8.innerHTML =  cat8.id + " " + cat8.name;

var img8 = document.createElement('img');
img8.src = cat8.img_link
img8.width = 300
img8.height=400
container8 = document.querySelector('#image-container8');
container8.append(img8);
    
var age8 = document.getElementById('divage8');
age8.innerHTML =  cat8.age + " год"

var rate8 = document.getElementById('divrate8');
rate8.innerHTML =  cat8.rate + " баллов"


var favourite8 = document.getElementById('favourite8');
 if (cat8.favourite == true) {
    favourite8.innerHTML =  "фаворит"
 }

var description8 = document.getElementById('description8');
description8.innerHTML =  cat8.description



    