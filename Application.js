class Application{
    constructor(window, vueListeVelo){
        this.window = window;
        this.vueListeVelo = vueListeVelo;
        this.vueListeVelo.afficher();



    }



}



new Application(window, new VueListeVelo())
{


}
