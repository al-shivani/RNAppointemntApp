export const TODAY =1;
export const TOMORROW = 2;
export const DAYAFTERTOMORROW = 3

export const getTimeStamp = (day) =>{
    var date = new Date()
    if(day == TOMORROW){
      date.setDate(date.getDate() + 1)
    }
    if(day == DAYAFTERTOMORROW){
      date.setDate(date.getDate() + 2)
    }
    var formatedDate = (((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear());
    var timeStamp = new Date(formatedDate).getTime();
    console.log("timeStamp"+timeStamp)
    return(timeStamp) ;
  
  }