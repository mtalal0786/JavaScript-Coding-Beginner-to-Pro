let myDate = new Date()
console.log(myDate);
myDate = new Date("2024-07-15")
console.log(myDate);
console.log(myDate.constructor);
console.log(myDate.getDate()); // Day of Month (1 to 31)
console.log(myDate.getDay()); // Day of Week (0 to 6)
console.log(myDate.getFullYear()); // Get Full Year Like 2024
console.log(myDate.getHours()); // Give Hours of a Day (0 to 23)
console.log(myDate.getMilliseconds()); // Get Mili Seconds
console.log(myDate.getMinutes()); // Get Minutes (0 to 59)
console.log(myDate.getMonth()); // Get Month (0 to 11)
console.log(myDate.getSeconds()); // Get Seconds (0 to 59)
console.log(myDate.getTime()); // Get MilliSeconds Since 1970
console.log(myDate.getTimezoneOffset()); // Get Difference btw UTC and Local Time
console.log(myDate.getUTCDate()); // Get UTC Date (1 to 31)
console.log(myDate.getUTCDay()); // Get UTC Day (0 to 6)
console.log(myDate.getUTCFullYear()); // Get UTC Full Year Like 2024
console.log(myDate.getUTCHours()); // Get UTC Mili Seconds 
console.log(myDate.getUTCMinutes()); // Get UTC Minutes (0 to 59)
console.log(myDate.getUTCMonth()); // Get UTC Month (0 to 11)
console.log(myDate.getUTCSeconds()); // Get UTC Seconds (0 to 59)
console.log(Date.now()); // Give MiliSeconds from 1, 1970. Only Used With Date.
console.log(myDate.setDate()); // Give Day of Month
console.log(myDate.setMilliseconds()); // Give Day of Month
console.log(myDate.setSeconds()); // Get UTC Seconds (0 to 59)
console.log(myDate.setMinutes()); // Get UTC Seconds (0 to 59)
console.log(myDate.setHours()); // Get UTC Seconds (0 to 59)
console.log(myDate.setMonth()); // Get UTC Seconds (0 to 59)
console.log(myDate.setTime()); // Get UTC Seconds (0 to 59)
console.log(myDate.setFullYear()); // Get UTC Full Year (0 to 59)
console.log(myDate.setUTCDate()); // Get UTC Day of Month (0 to 59)
console.log(myDate.setUTCMilliseconds()); // Get UTC Milli Seconds (0 to 59)
console.log(myDate.setUTCSeconds()); // Get UTC Seconds (0 to 59)
console.log(myDate.setUTCMinutes()); // Get UTC Minutes (0 to 59)
console.log(myDate.setUTCHours()); // Get UTC Hours (0 to 59)
console.log(myDate.setUTCMonth()); // Get UTC Month 
console.log(myDate.setUTCFullYear()); // Get UTC Full Year 
console.log(myDate.toDateString()); // Get Get Date as a Readable Date String
console.log(myDate.toISOString()); // Get UTC Seconds (0 to 59)
console.log(myDate.toJSON()); // Get UTC Seconds (0 to 59)
console.log(myDate.toLocaleDateString()); // Get UTC Seconds (0 to 59)
console.log(myDate.toLocaleTimeString()); // Get UTC Seconds (0 to 59)
console.log(myDate.toLocaleString("hi-IN",{
    dateStyle:"full",timeStyle:"short",hour12:true,hourCycle:"h12",weekday:"long",year:"numeric",
    month:"long",day:"2-digit",hour:"numeric",second:"2-digit",timeZoneName:"long"
})); 
console.log(myDate.toString()); // Get UTC Seconds (0 to 59)
console.log(myDate.toTimeString()); // Get UTC Time Portion of Date String.
console.log(myDate.toUTCString()); // Get UTC Date Object as a String.
console.log(Date.UTC()); // Get Milli Seconds of date from 1970 to given date.
console.log(myDate.valueOf()); // Get UTC Seconds (0 to 59)


//*********************************** References for Study ********************************

// Youtube => https://www.youtube.com/watch?v=tGLCuoumaGY&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=14
// W3School => https://www.w3schools.com/jsref/jsref_obj_date.asp