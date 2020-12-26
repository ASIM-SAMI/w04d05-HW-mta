let n = ['Times Square', '34th',
 '28th', '23th', 'Union Square' ,'8th']

 let l = ['8th', '6th', 'Union Square', '3rd', '1st']

 let sixth = ['Grand Central', '33rd', '28th',
'23rd', 'Union Square', 'Astor Place']

let stops_total = 0
let final_string = ['','','','']


function planTrip(line, start, change, target){
    line = line.toLowerCase()
    switch(line){
        case 'n': findTheWay(line, n, start, n[4])
        break;   
        case 'l': findTheWay(line, l, start, l[2])
        break
        case '6': findTheWay(line, sixth, start, sixth[4])
        break 
        default: console.log('Error')
    }

    changeWay(change, target)
    console.log(`${stops_total} stops in total.`)
    final_string[3] = `${stops_total} stops in total.`
}


function findTheWay(li, line , start, stop){
    var us_index = line.indexOf('Union Square')
    var start = line.indexOf(start)
    if(start > us_index){
        start -= 1
    }else if(start < us_index){
        start += 1
    }
    var str = `You must travel through the following stops on the ${li.toUpperCase()} line:`
    for(var i = start; i < line.length; i++){
       if(line[i] !== stop){
        str += ` ${line[i]},`
        stops_total += 1
       }else{
        str += ` ${line[i]}.`
        stops_total += 1
        i = 50
       }
}
     console.log(`${str}`)
     final_string[0] = `${str}`
}



function changeWay(change, target){
    console.log(`Change at Union Square.`)
    final_string[1] = `Change at Union Square.`
    change = change.toLowerCase()
    switch(change){ 
        case 'n': newWay(n, target)   
        break   
        case 'l': newWay(l, target) 
        break
        case '6': newWay(sixth, target)
        break
        default: console.log('Error')
    }
}

function newWay(newLine,target){
    var str = `Your journey continues through the following stops:`
    var us_index = newLine.indexOf('Union Square')
    if(newLine.indexOf(target) > us_index){
        us_index += 1
    }else if(newLine.indexOf(target) < us_index){
        us_index -= 1
    }
      for(var i = us_index; i >= 0; i--){
        
         if(newLine[i] !== target){
            str += ` ${newLine[i]},`
            stops_total += 1
         }else{
            str += ` ${newLine[i]}.`
            stops_total += 1
            i = -1
         }
      }
      console.log(str)  
      final_string[2] = `${str}`
}



$('#button').on("click",()=>{
    var user_line = $('#line').val()
    var user_station = $('#start-station').val()
    var user_target_line = $('#new-line').val()
    var user_target_station = $('#target-station').val()
    planTrip(user_line, user_station, user_target_line, user_target_station)
    $('#final1-string').text(final_string[0])
    $('#final2-string').text(final_string[1])
    $('#final3-string').text(final_string[2])
    $('#final4-string').text(final_string[3])
})

// var user_line = window.prompt('What Line Your In Now?[N , L ,6 ]: ')
// var user_station = window.prompt('In Any Station You Are? ')
// var user_target_line = window.prompt('What Line You Want to Go Through?[N , L ,6 ]: ')
// var user_target_station = window.prompt('In Any Station You Want To Go? ')

// planTrip(user_line, user_station, user_target_line, user_target_station)


