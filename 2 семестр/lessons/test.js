//28.01.25
const prom = new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
        resolve('other dimension');
    }
    reject('Wrong!');
});


prom.then((data) => {
    console.log("data => ", data);
    return data
}).then((data) => {
    console.log("data => ", data);
    return data
}).catch((err) => {
    console.log("err => ", err);   
});
