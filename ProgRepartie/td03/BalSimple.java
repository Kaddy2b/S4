//package Ex01;

import java.util.concurrent.Semaphore;
// 	System.out.println(sDepot);

class BalSimple {
	String message;
	Semaphore sDepot, sRetrait;

	public BalSimple() {
		sDepot = new Semaphore(1);
		sRetrait = new Semaphore(1);
	}

	public void deposeRequete(String mess) {
		try {
			//BAL client vide.
			sDepot.acquire(); //BAL client pleine.
        } catch (InterruptedException e) {
            System.out.println("FATAL ERROR!");
            return;
        }
        message = mess;
	}

	public String retireRequete(){
		try {
			//BAL serveur vide.
			sRetrait.acquire(); //BAL serveur pleine.
			sDepot.release(); //BAL client vide.
        } catch (InterruptedException e) {
            System.out.println("FATAL ERROR!");
        }
        System.out.println(message);
        return message;
	}

	public static void main(String[] args) {
		BalSimple BAL = new BalSimple();
		Client c1 = new Client("Gabriel");

		c1.deposeRequete("Bonjour");
	}
}