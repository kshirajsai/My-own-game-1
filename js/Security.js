class Security{
    constructor(){
        this.access1 = createInput()
        this.access1.position(100, 90);
        this.access1.style('background', 'white');

        this.button1 = createButton('Submit');
        this.button1.position(100,110);
        this.button1.style('background', 'lightgrey');
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();    
            }
        });
    }
}
