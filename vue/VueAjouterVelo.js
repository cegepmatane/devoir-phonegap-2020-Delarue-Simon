class VueAjouterVelo{
    constructor(){
        this.html = document.getElementById("html-vue-ajouter-velo").innerHTML;
        this.actionAjouterVelo = null;
    }

    initialiserActionAjouterVelo(actionAjouterVelo){
        this.actionAjouterVelo = actionAjouterVelo;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        document.getElementById("formulaire-ajouter").addEventListener(
            "submit",evenement => this.enregistrer(evenement));

    }

    enregistrer(evenement){
        evenement.preventDefault();

        let modele = document.getElementById("velo-modele").value;
        let marque = document.getElementById("velo-marque").value;
        let prix = document.getElementById("velo-prix").value;

        this.actionAjouterVelo(new Velo(modele, marque, prix, null));
    }



}
