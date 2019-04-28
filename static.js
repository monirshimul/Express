/*let ob = {
    name: "ovi"
}

let ob2 = {

}

function inject(obj) {
    obj.age = 20;
}


inject(ob2);

console.log(ob2);
*/


class express {

    constructor(id){
        this.name = "Express"
        this.objectId = id;
        if(typeof express.counter == 'undefined')
            express.counter = 0;
        express.counter++;
    }

    static json(){
        return "this is json func";
    }

    use(val){
        console.log(val)
    }

    show() {
        console.log(express.json());
        console.log(this.objectId);
    }

}

console.log(express.counter);
let app = new express(1);
let app2 = new express(2);
let app3 = new express(2);
let app4 = new express(2);
let app5 = new express(2);

// app.show();
// app2.show();

console.log(express.counter);

