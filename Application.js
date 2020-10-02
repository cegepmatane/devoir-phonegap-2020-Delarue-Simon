class Application{
    constructor(window, veloDAO, vueListeVelo){
        this.window = window;
        this.veloDAO = veloDAO;
        this.vueListeVelo = vueListeVelo;

        this.vueListeVelo.initialiserListeVelo(this.veloDAO.lister());
        this.vueListeVelo.afficher();



    }



}



new Application(window,new VeloDAO(), new VueListeVelo())
{


}
