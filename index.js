
function superbowlWin(record /* arr */){
    // arr.find(r => {
    //     r.result === "W";
    //     return r.year;
    // })
    // return undefined;

    /*
    Sol */
    let result = record.find( record => record.result === "W" )
  return !!result ? result.year : undefined
    
}