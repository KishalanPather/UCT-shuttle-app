class API {
    static Key = "AIzaSyA81Olua5TZ0xFGc-231Cp_EyFIHiPeipA";

    static jammieStops  = {
        Clarinus:"1 Anzio Rd, Observatory, Cape Town, 7925, South Africa",
        Claremont:"Claremont, Cape Town, 7735, South Africa",
        Sandown: "Sandown Rd, Rondebosch, Cape Town, 7700, South Africa",
        Tugwell: "Baxter Rd, Rosebank, Cape Town, 7700, South Africa",
        Rochester:"10 Browning Rd, Observatory, Cape Town, 7925, South Africa",
        Hiddingh: "Gardens, Cape Town, 8001, South Africa",
        Foresthill: "95 Main Rd, Mowbray, Cape Town, 7700, South Africa",
        Obzsquare:"129 Main Rd, Observatory, Cape Town, 7925, South Africa",
        Liesbeeck:"Selby Rd, Mowbray, Cape Town, 7700, South Africa"
    }

    static autocompleteFields = {
        fields: ["address_components","name"],
        types: ["establishment"],
        componentRestrictions: { country: "za" }
    }

    
    static calcDistance(origin,destination){ //returns array with {distance, duration,origin} objects
        return new Promise((resolve,reject) => {
            const service = new google.maps.DistanceMatrixService();
            const arr = [];

            service.getDistanceMatrix({
                origins: origin, //must use Object.values(API.jammieStops)
                destinations: [destination],
                travelMode: 'DRIVING'

            },(response,status) => {
                if (status == "OK"){
                    const origins = response.originAddresses;

                    for (let i = 0; i < origins.length; i++){
                        let results = response.rows[i].elements;

                        let distance = results[0].distance.text;
                        let duration = results[0].duration.text;
                        let jammieStop = order.getObjKey(this.jammieStops,origins[i]); //gets the jammie stop name

                        arr.push({distance:distance,duration:duration,jammiestop:jammieStop,origin:origins[i]});
                    }
                    resolve(arr);
                } else{
                    console.log("An error occurred with the status",status);
                }
            });

        });
        
    }
}