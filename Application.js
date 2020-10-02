class Application{
    constructor(window, veloDAO, vueListeVelo, vueAjouterVelo){
        this.window = window;
        this.veloDAO = veloDAO;

        this.vueListeVelo = vueListeVelo;

        this.vueAjouterVelo = vueAjouterVelo;
        this.vueAjouterVelo.initialiserActionAjouterVelo(velo =>this.actionAjouterVelo(velo));

        this.window.addEventListener("hashchange", () =>this.naviguer());

        this.naviguer();

    }

    naviguer(){
        let hash = window.location.hash;

        if(!hash){

            this.vueListeVelo.initialiserListeVelo(this.veloDAO.lister());
            this.vueListeVelo.afficher();

        }else if(hash.match(/^#ajouter-velo/)){

            this.vueAjouterVelo.afficher();
        }
    }
    actionAjouterVelo(velo){
        this.veloDAO.ajouter(velo);
        this.window.location.hash = "#";
    }


}



new Application(window,new VeloDAO(), new VueListeVelo(), new VueAjouterVelo());
