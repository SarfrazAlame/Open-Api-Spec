import { measure } from "helpful-decorators"

class DateClass {
    private timeZone:string
    constructor(timeZone:string) {
        this.timeZone = timeZone
    }
    @measure
    getTime() {
        const v = new Date()
        console.log("hi from gettime")
        return v.getTime()
    }

}

const dateObject = new DateClass("IND")
dateObject.getTime()
dateObject.getTime()
dateObject.getTime()
dateObject.getTime()