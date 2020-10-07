class Application{
    constructor(window, veloDAO, vueListeVelo, vueAjouterVelo, vueVelo){
        this.window = window;
        this.veloDAO = veloDAO;

        this.vueListeVelo = vueListeVelo;

        this.vueAjouterVelo = vueAjouterVelo;
        this.vueAjouterVelo.initialiserActionAjouterVelo(velo =>this.actionAjouterVelo(velo));

        this.vueVelo = vueVelo;

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
        }else{

            let navigation = hash.match(/^#velo\/([0-9]+)/);
            let idVelo = navigation[1];

            this.vueVelo.initialiserVelo(this.veloDAO.lister()[idVelo]);
            this.vueVelo.afficher();

        }
    }


    actionAjouterVelo(velo){
        this.veloDAO.ajouter(velo);
        this.window.location.hash = "#";
    }


}



new Application(window,new VeloDAO(), new VueListeVelo(), new VueAjouterVelo(), new VueVelo());
