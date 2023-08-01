let req = new XMLHttpRequest();
req.open('GET', '/service-list.json', false);
req.setRequestHeader('Content-Type', 'application/json');

req.send();

let serviceList = JSON.parse(req.responseText);
console.log(serviceList)

const inner = document.querySelector('.service-list')


function renderLinks(title) {
    inner.insertAdjacentHTML(
        'beforeend' ,
        `
        <li><a href="./service-single.html">${title}</a></li>
        `
    )
}
if (document.querySelector('.main-service')) {
    for(let el in serviceList) {
        renderLinks(el)
    }
}


const serviceLinks = document.querySelectorAll('.service-list li a');
const servDescrWrapper = document.querySelector('.single-content-wrapper')

serviceLinks.forEach(el=> {
    el.addEventListener('click' , (e)=> {
        localStorage.setItem('link', el.innerHTML)
    })
})
const singleMain = document.querySelector('.single-main')
if (servDescrWrapper) {
    for(let el in serviceList) {
        renderLinks(el)
    }
    for(let el in serviceList) {
        if (el === localStorage.getItem('link')) {
            renderServiceDescription(serviceList[el].title , serviceList[el].description.p1 , serviceList[el].description.p2  ,
                serviceList[el].description.p3 , serviceList[el].description.listtitle1  ,
                 serviceList[el].description.listtitle2  , serviceList[el].description.list1  , serviceList[el].description.list2  )
        }
    }
}

function renderServiceDescription(title = null, p1 = null, p2 = null , p3 = null , listtitle1 = null , listtitle2 = null , list1 = null , list2 = null  ) {
    const servTitle = document.createElement('h2');
    servTitle.innerHTML = title;
    const servDescr1= document.createElement('p');
    servDescr1.innerHTML = p1;
    servDescrWrapper.append(servTitle , servDescr1)
    if (p2) {
        const servDescr2= document.createElement('p');
        servDescr2.innerHTML = p2;
        servDescrWrapper.append(servDescr2)
    }
    if (listtitle1) {
        const servListTitle = document.createElement('h3');
        servListTitle.innerHTML =  listtitle1;
        const servList1= document.createElement('ul');
        
        list1.forEach(el => {
            const listItem = document.createElement('li');
            listItem.innerHTML= el;
            servList1.append(listItem)
        })
        servDescrWrapper.append(servListTitle , servList1)
    }
    if (listtitle2) {
        const servListTitle2 = document.createElement('h3');
        servListTitle2.innerHTML =  listtitle2;
        const servList2= document.createElement('ul');
        
        list2.forEach(el => {
            const listItem = document.createElement('li');
            listItem.innerHTML= el;
            servList2.append(listItem)
        })
        servDescrWrapper.append(servListTitle2 , servList2)
    }
    const servDescr3= document.createElement('p');
    servDescr3.innerHTML = p3;
    servDescrWrapper.append(servDescr3)



    
}