function Animal (name, voice) {
    this.name = name;
    this.voice = voice;
    this.getVoice = () => {
        console.log ('MEOOOOOWW')
    }
}

const cat = new Animal ('Chef', 'Meow')
console.log (cat)
cat.getVoice()