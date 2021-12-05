
document.cookie = '123123123123';
localStorage.setItem('auto', 'opelAstra h')

const info = new userInfo;



let f1 = [];
f1.push(info.pageon());
f1.push(info.referrer());
f1.push(info.previousSites());
f1.push(info.dataCookie());
f1.push(info.dataStorage());


f1.forEach(item => {
    let p = document.createElement('p');
    p.textContent = item;
    document.querySelector('body').append(p);
})


console.log(info.dataStorage());
console.log(info.sizeScreen());

async function t1() {
    // console.log(await info.position());
    // console.log(await info.battery());
    console.log(await info.ip());
}

t1();