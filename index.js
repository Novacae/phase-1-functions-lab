// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
       if(distance > 42)
       return distance % 42
    else  return 42 - distance
}
    
function distanceFromHqInFeet (distanceInFeet) {
distanceFromHqInBlocks(distanceInFeet);
if(distanceInFeet > 42)
return (distanceInFeet % 42) * 264
else return (42 - distanceInFeet) * 264
}

function distanceTravelledInFeet(start,destination) {
distanceFromHqInFeet(start,destination);
if(start > destination)
return(start - destination) * 264
else return (destination % start ) * 264
}

function calculatesFarePrice(start1,destination1) {
distanceTravelledInFeet(start1,destination1); 

if((start1 - destination1) * 264 < 400 )
return (0)
else if ((start1 - destination1) * 264 > 400 && (start1 - destination1) * 264 < 2000) 
return ((start1 - destination1) * 264 * 0.02 - 8 - .0000000000000005)
else if (( start1 - destination1) * 264 > 2000 && ( start1 - destination1) * 264 < 2500)
///return ((start1 - destination1) * 264)*25 
return ( 5)
else return ('cannot travel that far')
}

        