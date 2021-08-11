function runTimer() {
    //get millisecond count
    const countDate = new Date("August 27, 2021, 17:45:00").getTime();
    const nowTime = new Date().getTime();
    const timeToo = countDate - nowTime;
    console.log(timeToo);

    //convert millisecond to day, hour, minute, second
    const days = Math.floor(timeToo / (1000*60*60*24));
    const hours = Math.floor(timeToo % (1000*60*60*24) / (1000*60*60))
    const mins = Math.floor(timeToo % (1000*60*60) / (1000 * 60));
    const secs = Math.floor(timeToo % (1000*60) / (1000));

    //query selectors 
    const dayDisTop = document.querySelector('.day-dis-top');
    const dayDisBottom = document.querySelector('.day-dis-bottom');
    const hourDisTop = document.querySelector('.hour-dis-top');
    const hourDisBottom = document.querySelector('.hour-dis-bottom');
    const minDisTop = document.querySelector('.min-dis-top');
    const minDisBottom = document.querySelector('.min-dis-bottom');
    const secDisTop = document.querySelector('.sec-dis-top');
    const secDisBottom = document.querySelector('.sec-dis-bottom');

    //DOM manipulators
    dayDisTop.innerHTML = days;
    dayDisBottom.innerHTML = days;
    hourDisTop.innerHTML = hours;
    hourDisBottom.innerHTML = hours;
    minDisTop.innerHTML = mins;
    minDisBottom.innerHTML = mins;
    secDisTop.innerHTML = secs;
    secDisBottom.innerHTML = secs;

}

export { runTimer };