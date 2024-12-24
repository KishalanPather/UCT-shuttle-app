class order{
    
   static sortArr(arr,ord){
    if (arr.length != 0){
            let smallestValue = arr[0];
        
            for (let i = 1; i < arr.length; i++){ //finds the smallest value
                if (order.strToNum(arr[i].distance) < order.strToNum(smallestValue.distance)){
                    smallestValue = arr[i];
                }
            }
            
            for (let i = 0; i < arr.length; i++){ //finds the index of the smallest value to remove it from original array
                if (arr[i] === smallestValue){
                    arr.splice(i, 1); 
                }
            }
        
            ord.push(smallestValue); //adds the smallest value to a new array 
            this.sortArr(arr,ord); //recursively calls array without the smallest value
            }
    }

    static getObjKey(obj, value) {
        return Object.keys(obj).find(key => obj[key] === value);
      }


    static strToNum(str){
       return Number(str.split(" ")[0]);
    } 
}