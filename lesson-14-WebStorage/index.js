/*
 Создайте форму с тремя input (firstName, age, email) и button.

 По нажатию на кнопку:
- нужно получить value из input
- сформировать из этого объект типа: { firstName: ‘Serhii’, age: 25, email:
‘example@gmail.com’ }
- сохранить это в localStorage.

 При обновлении странички
- получить эти данные из localStorage
- создать параграф для каждого значения
- отобразить параграфы со значениями под инпутами
*/

const formUserInfo = document.forms.userInfo;
const userBtn = document.querySelector('#userBtn');

userBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let userObj = createUserObj(formUserInfo);
    localStorage.setItem('user', JSON.stringify(userObj));
});


function createUserObj (i) {
    let user = {
        'firstName': i.firstName.value,
        'age': i.age.value,
        'email': i.email.value,
    }
    return user
};

if (window.location.reload) {
    let obj = getObjUser();
    let valueObj = getObjUserValues(obj);
    createPar(valueObj);
};

function getObjUser () {
    return JSON.parse(localStorage.getItem('user'));
}
function getObjUserValues (obj) {
    return Object.values(obj)
};

function createPar (obj) {
    for ( let i = 0; i < formUserInfo.elements.length; i++ ) {
        if (formUserInfo.elements[i].tagName == 'INPUT' ) {
            const paragraf = document.createElement('p');
            formUserInfo.elements[i].after(paragraf);
            paragraf.innerText = `Предыдущий ввод: ${obj[i]}`;
        }
    }
};