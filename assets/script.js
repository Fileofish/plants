// Burger-menu
const navToggle = document.getElementById('nav_toggle');
// ON
navToggle.addEventListener('click', (event) => {
    event.target.classList.add('active');
    navToggle.classList.add('active');
    document.getElementById('nav_toggle_off').classList.add('active');
    document.getElementById('nav').classList.add('active');

});
// OFF
document.querySelector('body').addEventListener('click', (event) => {
    if (event.target === navToggle) return;
    document.getElementById('nav_toggle').classList.remove('active');
    document.getElementById('nav_toggle_off').classList.remove('active');
    document.getElementById('nav').classList.remove('active');
});

// Service-blur
let gardens = document.getElementById('gardens'),
    lawn = document.getElementById("lawn"),
    planting = document.getElementById('planting');
// Garden on/off
gardens.addEventListener('click', () => {
    if (gardens.classList.contains('active')) {
        gardens.classList.remove('active');
        lawn.classList.remove('active');
        planting.classList.remove('active');
        document.getElementById('img_garden_first').classList.remove('active');
        document.getElementById('img_garden_second').classList.remove('active');
        document.getElementById('img_garden_third').classList.remove('active');
        document.getElementById('img_garden_fourth').classList.remove('active');
        document.getElementById('img_garden_fifth').classList.remove('active');
        document.getElementById('img_garden_sixth').classList.remove('active');
    } else {
        gardens.classList.add('active');
        document.getElementById('img_garden_second').classList.add('active');
        document.getElementById('img_garden_third').classList.add('active');
        document.getElementById('img_garden_fourth').classList.add('active');
        document.getElementById('img_garden_sixth').classList.add('active');
        if (lawn.classList.contains('active') && planting.classList.contains('active')) {
            document.getElementById('lawn').classList.remove('active');
            document.getElementById('planting').classList.remove('active');
            document.getElementById('img_garden_first').classList.remove('active');
            document.getElementById('img_garden_fifth').classList.remove('active');
        } else if (lawn.classList.contains('active')) {
            document.getElementById('img_garden_first').classList.remove('active');
            document.getElementById('img_garden_third').classList.remove('active');
            document.getElementById('img_garden_fifth').classList.remove('active');
        } else if (planting.classList.contains('active')) {
            document.getElementById('img_garden_first').classList.remove('active');
            document.getElementById('img_garden_second').classList.remove('active');
            document.getElementById('img_garden_fourth').classList.remove('active');
            document.getElementById('img_garden_fifth').classList.remove('active');
            document.getElementById('img_garden_sixth').classList.remove('active');
        }
    }
});
// Lawn on/off
lawn.addEventListener('click', () => {
    if (lawn.classList.contains('active')) {
        gardens.classList.remove('active');
        lawn.classList.remove('active');
        planting.classList.remove('active');
        document.getElementById('img_garden_first').classList.remove('active');
        document.getElementById('img_garden_second').classList.remove('active');
        document.getElementById('img_garden_third').classList.remove('active');
        document.getElementById('img_garden_fourth').classList.remove('active');
        document.getElementById('img_garden_fifth').classList.remove('active');
        document.getElementById('img_garden_sixth').classList.remove('active');
    } else {
        lawn.classList.add('active');
        document.getElementById('img_garden_first').classList.add('active');
        document.getElementById('img_garden_second').classList.add('active');
        document.getElementById('img_garden_fourth').classList.add('active');
        document.getElementById('img_garden_fifth').classList.add('active');
        document.getElementById('img_garden_sixth').classList.add('active');
        if (gardens.classList.contains('active') && planting.classList.contains('active')) {
            document.getElementById('gardens').classList.remove('active');
            document.getElementById('planting').classList.remove('active');
            document.getElementById('img_garden_third').classList.remove('active');
        } else if (gardens.classList.contains('active')) {
            document.getElementById('img_garden_first').classList.remove('active');
            document.getElementById('img_garden_third').classList.remove('active');
            document.getElementById('img_garden_fifth').classList.remove('active');
        } else if (planting.classList.contains('active')) {
            document.getElementById('img_garden_second').classList.remove('active');
            document.getElementById('img_garden_third').classList.remove('active');
            document.getElementById('img_garden_fourth').classList.remove('active');
            document.getElementById('img_garden_sixth').classList.remove('active');
        }
    }
});
// Planting on/off
planting.addEventListener('click', () => {
    if (planting.classList.contains('active')) {
        gardens.classList.remove('active');
        lawn.classList.remove('active');
        planting.classList.remove('active');
        document.getElementById('img_garden_first').classList.remove('active');
        document.getElementById('img_garden_second').classList.remove('active');
        document.getElementById('img_garden_third').classList.remove('active');
        document.getElementById('img_garden_fourth').classList.remove('active');
        document.getElementById('img_garden_fifth').classList.remove('active');
        document.getElementById('img_garden_sixth').classList.remove('active');
    } else {
        planting.classList.add('active');
        document.getElementById('img_garden_first').classList.add('active');
        document.getElementById('img_garden_third').classList.add('active');
        document.getElementById('img_garden_fifth').classList.add('active');
        if (gardens.classList.contains('active') && lawn.classList.contains('active')) {
            gardens.classList.remove('active');
            lawn.classList.remove('active');
            document.getElementById('img_garden_second').classList.remove('active');
            document.getElementById('img_garden_fourth').classList.remove('active');
            document.getElementById('img_garden_sixth').classList.remove('active');
        } else if (gardens.classList.contains('active')) {
            document.getElementById('img_garden_first').classList.remove('active');
            document.getElementById('img_garden_second').classList.remove('active');
            document.getElementById('img_garden_fourth').classList.remove('active');
            document.getElementById('img_garden_fifth').classList.remove('active');
            document.getElementById('img_garden_sixth').classList.remove('active');
        } else if (lawn.classList.contains('active')) {
            document.getElementById('img_garden_second').classList.remove('active');
            document.getElementById('img_garden_fourth').classList.remove('active');
            document.getElementById('img_garden_third').classList.remove('active');
            document.getElementById('img_garden_sixth').classList.remove('active');
        }
    }
});

// Prices according
let basics = document.getElementById('basics'),
    standard = document.getElementById('standard'),
    proCare = document.getElementById('proCare');
basics.addEventListener('click', () => {
    if (basics.classList.contains('active')) {
        standard.classList.remove('active');
        proCare.classList.remove('active');
        basics.classList.remove('active');
        document.getElementById('arr_basics').classList.remove('active');
        document.getElementById('li_basics_content').classList.remove('active');
        document.getElementById('arr_standard').classList.remove('active');
        document.getElementById('li_standard_content').classList.remove('active');
        document.getElementById('arr_proCare').classList.remove('active');
        document.getElementById('li_proCare_content').classList.remove('active');
    } else {
        standard.classList.remove('active');
        proCare.classList.remove('active');
        basics.classList.add('active');
        document.getElementById('arr_basics').classList.add('active');
        document.getElementById('li_basics_content').classList.add('active');
        document.getElementById('arr_standard').classList.remove('active');
        document.getElementById('li_standard_content').classList.remove('active');
        document.getElementById('arr_proCare').classList.remove('active');
        document.getElementById('li_proCare_content').classList.remove('active');
    }
});
standard.addEventListener('click', (event) => {
    if (standard.classList.contains('active')) {
        standard.classList.remove('active');
        proCare.classList.remove('active');
        basics.classList.remove('active');
        document.getElementById('arr_basics').classList.remove('active');
        document.getElementById('li_basics_content').classList.remove('active');
        document.getElementById('arr_standard').classList.remove('active');
        document.getElementById('li_standard_content').classList.remove('active');
        document.getElementById('arr_proCare').classList.remove('active');
        document.getElementById('li_proCare_content').classList.remove('active');
    } else {
        standard.classList.add('active');
        proCare.classList.remove('active');
        basics.classList.remove('active');
        document.getElementById('arr_standard').classList.add('active');
        document.getElementById('li_standard_content').classList.add('active');
        document.getElementById('arr_basics').classList.remove('active');
        document.getElementById('li_basics_content').classList.remove('active');
        document.getElementById('arr_proCare').classList.remove('active');
        document.getElementById('li_proCare_content').classList.remove('active');
    }
});
proCare.addEventListener('click', (event) => {
    if (proCare.classList.contains('active')) {
        standard.classList.remove('active');
        proCare.classList.remove('active');
        basics.classList.remove('active');
        document.getElementById('arr_basics').classList.remove('active');
        document.getElementById('li_basics_content').classList.remove('active');
        document.getElementById('arr_standard').classList.remove('active');
        document.getElementById('li_standard_content').classList.remove('active');
        document.getElementById('arr_proCare').classList.remove('active');
        document.getElementById('li_proCare_content').classList.remove('active');
    } else {
        proCare.classList.add('active');
        standard.classList.remove('active');
        basics.classList.remove('active');
        document.getElementById('arr_proCare').classList.add('active');
        document.getElementById('li_proCare_content').classList.add('active');
        document.getElementById('arr_basics').classList.remove('active');
        document.getElementById('li_basics_content').classList.remove('active');
        document.getElementById('arr_standard').classList.remove('active');
        document.getElementById('li_standard_content').classList.remove('active');
    }
});

// Contacts us city bar
let city = document.getElementById('city');
let cityList = document.getElementById('city_list');
let woman = document.getElementById('woman');
let content = document.getElementById('contacts_content');
// ON
city.addEventListener('click', () => {
    if (city.classList.contains('active')) {
        city.classList.remove('active');
        cityList.classList.remove('active');
    } else {
        cityList.classList.add('active');
        city.classList.add('active');
        woman.classList.add('active');
        content.classList.add('active');
        document.getElementById('canandaiguaNy').classList.remove('active');
        document.getElementById('newYork').classList.remove('active');
        document.getElementById('yonkers').classList.remove('active');
        document.getElementById('sherrill').classList.remove('active');
    }
});
// OFF
let canandaigua = document.getElementById('canandaigua');
canandaigua.addEventListener('click', () => {
    document.getElementById('canandaiguaNy').classList.add('active');
    document.getElementById('city_choice').classList.remove('active');
    document.getElementById('canandaigua_choice').classList.add('active');
    cityList.classList.remove('active');
    woman.classList.add('active');
    content.classList.add('active');
    document.getElementById('newYork_choice').classList.remove('active');
    document.getElementById('yonkers_choice').classList.remove('active');
    document.getElementById('sherrill_choice').classList.remove('active');
});
let newYork = document.getElementById('newYorkCity');
newYork.addEventListener('click', () => {
    document.getElementById('newYork').classList.add('active');
    document.getElementById('city_choice').classList.remove('active');
    document.getElementById('newYork_choice').classList.add('active');
    cityList.classList.remove('active');
    woman.classList.add('active');
    content.classList.add('active');
    document.getElementById('canandaigua_choice').classList.remove('active');
    document.getElementById('yonkers_choice').classList.remove('active');
    document.getElementById('sherrill_choice').classList.remove('active');
});
let yonkers = document.getElementById('yonkersNy');
yonkers.addEventListener('click', () => {
    document.getElementById('yonkers').classList.add('active');
    document.getElementById('city_choice').classList.remove('active');
    document.getElementById('yonkers_choice').classList.add('active');
    cityList.classList.remove('active');
    woman.classList.add('active');
    content.classList.add('active');
    document.getElementById('canandaigua_choice').classList.remove('active');
    document.getElementById('newYork_choice').classList.remove('active');
    document.getElementById('sherrill_choice').classList.remove('active');
});
let sherrill = document.getElementById('sherrillNy');
sherrill.addEventListener('click', () => {
    document.getElementById('sherrill').classList.add('active');
    document.getElementById('city_choice').classList.remove('active');
    document.getElementById('sherrill_choice').classList.add('active');
    cityList.classList.remove('active');
    woman.classList.add('active');
    content.classList.add('active');
    document.getElementById('canandaigua_choice').classList.remove('active');
    document.getElementById('newYork_choice').classList.remove('active');
    document.getElementById('yonkers_choice').classList.remove('active');
});