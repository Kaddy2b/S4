//package Ex01;

import java.util.concurrent.Semaphore;
// 	System.out.println(sDepot);

class Client {
	String nom;
	BalSimple BAL;

	public Client(String n, BalSimple b) {
		nom = n;
		BAL = b;
	}

	public void deposeRequete(String mess) {
		String message;
        message = mess;
        message += "\n" + nom;
        BAL.deposeRequete(message);
	}
}