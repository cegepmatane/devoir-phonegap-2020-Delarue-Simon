class VeloDAO{
    constructor(){
        /*
        this.listeVelo = [
            {modele:"Beetwin MAX",marque:"Beetwin",prix:"435",id:0},
            {modele:"2GS 30GT",marque:"Chromag",prix:"2300",id:1},
            {modele:"BMX 24F",marque:"Dynafit",prix:"1230",id:2}]*/

        this.listeVelo = [];

    }

    lister(){

        if(localStorage['velo']){
            this.listeVelo= JSON.parse(localStorage['velo']);
        }
        for(let position in this.listeVelo){
            let velo = new Velo(this.listeVelo[position].modele,
                               this.listeVelo[position].marque,
                               this.listeVelo[position].prix,
                               this.listeVelo[position].id);
            this.listeVelo[velo.id] = velo;
        }

        return this.listeVelo;
    }
    ajouter(velo){

        if(this.listeVelo.length > 0)
            velo.id = this.listeVelo[this.listeVelo.length-1].id + 1;
        else
            velo.id = 0;

        this.listeVelo[velo.id] = velo;

        localStorage['velo'] = JSON.stringify(this.listeVelo);
        console.log("JSON.stringify(this.listeVelo) : " +
                    JSON.stringify(this.listeVelo));

    }



}
