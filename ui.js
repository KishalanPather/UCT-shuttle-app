class DOM {
    static addToList(list,origin,distance,duration){
        const listitem = `<li>
                            <h2>${origin}</h2>
                            <p>${distance} away or ${duration} away </p>
                        </li>`;
        list.innerHTML += listitem;
    }

    
}