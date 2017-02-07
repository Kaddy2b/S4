//package td01;

public class Ex03 implements Runnable {
	private String nom;

	public Ex03(String n) {
		nom = n;
	}

	public String getNom() {
		return nom;
	}

	public void run() {		
		for (int i=0; i<30 ; i++) {
			try {
	            Thread.sleep(500);
	        } catch (InterruptedException e) {
	            System.out.println("FATAL ERROR!\n404 NOT FOUND\nSO SORRY\n");
	            return;
	        }
			System.out.println(i + ": Je suis " + nom);
		}
	}

	public static void main(String[] args) throws InterruptedException {
		Ex03 rnb1 = new Ex03("T1");
		Ex03 rnb2 = new Ex03("T2");
		Ex03 rnb3 = new Ex03("T3");

		Thread T1 = new Thread(rnb1);
		Thread T2 = new Thread(rnb2);
		Thread T3 = new Thread(rnb3);

		System.out.println("Etat du Thread " + rnb1.getNom() + " : " + T1.getState());
		System.out.println("Etat du Thread " + rnb2.getNom() + " : " + T2.getState());
		System.out.println("Etat du Thread " + rnb3.getNom() + " : " + T3.getState());
		// NEW

		T1.start();
		T2.start();
		T3.start();

		System.out.println("Etat du Thread " + rnb1.getNom() + " : " + T1.getState());
		System.out.println("Etat du Thread " + rnb2.getNom() + " : " + T2.getState());
		System.out.println("Etat du Thread " + rnb3.getNom() + " : " + T3.getState());
		// RUNNABLE

		T1.join();
		T2.join();
		T3.join();

		System.out.println("Etat du Thread " + rnb1.getNom() + " : " + T1.getState());
		System.out.println("Etat du Thread " + rnb2.getNom() + " : " + T2.getState());
		System.out.println("Etat du Thread " + rnb3.getNom() + " : " + T3.getState());
		// TERMINATED
	}
}