const crashTrack = new Audio('./sounds/crash.mp3');
const kikBassTrack = new Audio('./sounds/kick-bass.mp3');
const snareTrack = new Audio('./sounds/snare.mp3');
const tom1Track = new Audio('./sounds/tom-1.mp3');
const tom2Track = new Audio('./sounds/tom-2.mp3');
const tom3Track = new Audio('./sounds/tom-3.mp3');
const tom4Track = new Audio('./sounds/tom-4.mp3');


var crash = new Vue({
    el: "#app",
    data: {
        name: "Crash"
    },
    methods: {
        playCrash() {
            crashTrack.play();
        }
    }
});
var kickBass = new Vue({
    el: "#app2",
    data: {
        name: "Kick-Bass"
    },
    methods: {
        playKickBass() {
            console.log('clicked');
            kikBassTrack.play();
        }
    }
});
var snare = new Vue({
    el: "#app3",
    data: {
        name: "Snare"
    },
    methods: {
        playsnareTrack() {
            console.log('clicked');
            snareTrack.play();
        }
    }
})
var tom1 = new Vue({
    el: "#app4",
    data: {
        name: "tom-1"
    },
    methods: {
        playTom1() {
            console.log('clicked');
            tom1Track.play();
        }
    }
});
var tom2 = new Vue({
    el: "#app5",
    data: {
        name: "tom-2"
    },
    methods: {
        playTom2() {
            console.log('clicked');
            tom2Track.play();
        }
    }
})
var tom3 = new Vue({
    el: "#app6",
    data: {
        name: "tom-3"
    },
    methods: {
        playTom3() {
            console.log('clicked');
            tom3Track.play();
        }
    }
})
var tom4 = new Vue({
    el: "#app7",
    data: {
        name: "tom-4",
        cilcked: false
    },
    methods: {
        playTom4() {
            console.log('clicked');
            tom4Track.play();
            this.cilcked = true
        }
    }
})