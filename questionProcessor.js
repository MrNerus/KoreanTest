function randomize(my_object){
    random_objects = get_max_n(my_object, 10)
    new_object = {}
    for (const key in random_objects) {
        number_of_slots = 4;
        shuffeled_deck   = []; for (let i = 0; i < number_of_slots; i++) shuffeled_deck.push(i)
        shuffeled_answer = []; for (let i = 0; i < number_of_slots; i++) shuffeled_answer.push({"word": "", "isCorrect": false})
        for (let i = 0; i < number_of_slots; i++) {
            random_index = shuffeled_deck.splice(get_random_number(0, shuffeled_deck.length-1), 1)[0]
            shuffeled_answer[i]["word"] = random_objects[key][random_index]
            shuffeled_answer[i]["isCorrect"] = (random_index == 0) ? 'true' : 'false';
        }
        new_object[key] = shuffeled_answer
    }
    return new_object
}

function get_max_n(my_object, number) {
    all_keys = Object.keys(my_object)
    max_item = Math.min(number, all_keys.length)
    new_keys = []
    for (let i = 0; i < max_item; i++){
        new_keys.push(all_keys.splice(get_random_number(0, all_keys.length-1), 1)[0])
        
    }

    new_object = {}
    new_keys.forEach(element => {
        new_object[element] = my_object[element]
    });
    return new_object;
}

function get_random_number(min, max) {
    return Math.round(Math.random() * (max + min) - min)
}



