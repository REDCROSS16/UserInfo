
class userInfo
{
    constructor() {
        this.timeOpened = new Date();
        this.timezone = (new Date()).getTimezoneOffset()/60;
    }

    /**
     * file location
     * @returns {string}
     */
    pageon (){ return window.location.pathname;}

    /**
     * referrer info
     * @returns {string}
     */
    referrer () { return document.referrer; }

    /**
     * number of sites was visited
     * @returns {number}
     */
    previousSites(){ return history.length; }

    /**
     * Object Navigator
     * @returns {Navigator | WorkerNavigator}
     */
    browserInfo () { return navigator}

    /**
     * Cookie info
     * @returns {string}
     */
    dataCookie() { return decodeURI(document.cookie.split(";")) }

    /**
     * LocalStorage info
     * @returns {Storage}
     */
    dataStorage () { return localStorage}

    /**
     * ScreenInfo
     * @returns {{innerWidth: number, innerHeight: number, pixelDepth: number, clientWidth: number, width: number, screenAvailWidth: number, colorDepth: number, clientHeight: number, screenAvailHeight: number, height: number}}
     */
    sizeScreen () {
        return {
            width: screen.width,
            height: screen.height,
            clientWidth: document.body.clientWidth,
            clientHeight: document.body.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
            screenAvailWidth: screen.availWidth,
            screenAvailHeight: screen.availHeight,
            colorDepth: screen.colorDepth,
            pixelDepth: screen.pixelDepth,
        }
    }

    /**
     * Geolocation info
     * @returns {Promise<{altitude: number, heading: number, accuracy: number, long: number, lat: number, speed: number, timestamp: *}>}
     */
    async position () {
        const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        return {
            long: pos.coords.longitude,
            lat: pos.coords.latitude,
            accuracy: pos.coords.accuracy,
            altitude: pos.coords.altitude,
            heading: pos.coords.heading,
            speed: pos.coords.speed,
            timestamp: pos.coords.timestamp,
        }
    }

    async battery () {
        try {
            let res = await navigator.getBattery();
            return res;
        }catch (e) {
            console.log(e)
        }
    }

    async ip() {
        let res = (await fetch('https://api.db-ip.com/v2/free/self'));
        return await res.json();
    }
}