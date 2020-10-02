class VueListeVelo{
    constructor(){

        this.html = document.getElementById("html-vue-liste-velo").innerHTML;
        this.listeVeloDonnee = null;


    }
    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;

        let listeVelo = document.getElementById("liste-velo");
        const listeVeloInnerHTML = listeVelo.innerHTML;
        let listeVeloHTMLRemplacement = "";

        for(var numeroVelo in this.listeVeloDonnee){
            let listeVeloInnerHTMLRemplacement = listeVeloInnerHTML;
            listeVeloInnerHTMLRemplacement = listeVeloInnerHTMLRemplacement.replace("{Velo.id}", this.listeVeloDonnee[numeroVelo].id);
            listeVeloInnerHTMLRemplacement = listeVeloInnerHTMLRemplacement.replace("{Velo.modele}", this.listeVeloDonnee[numeroVelo].modele);
            listeVeloInnerHTMLRemplacement += listeVeloInnerHTMLRemplacement;

            }

        listeVelo.innerHTML = listeVeloHTMLRemplacement;
    }


}
