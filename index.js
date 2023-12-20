// code your solution here
const superbowlWin = function(record){
  const winningRecord = record.find((record) => record.result === 'W');
//console.log(winningRecord)  
 return winningRecord ? winningRecord.year : undefined;
}

superbowlWin();