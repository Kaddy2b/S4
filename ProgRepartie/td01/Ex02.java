//package td01;

public class Ex02 extends Thread {
	private String nom;

	public Ex02(String n) {
		nom = n;
		System.out.println("Etat du Thread " + nom + " : " + this.getState());

	}

	public String getNom() {
		return nom;
	}

	public void run() {
		System.out.println("Etat du Thread " + nom + " : " + this.getState());
		
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
		Ex02 T1 = new Ex02("T1");
		Ex02 T2 = new Ex02(" T2");
		Ex02 T3 = new Ex02("  T3");

		T1.start();
		T2.start();
		T3.start();

		T1.join();
		T2.join();
		T3.join();

		System.out.println("Etat du Thread " + T1.getNom() + " : " + T1.getState());
		System.out.println("Etat du Thread " + T2.getNom() + " : " + T2.getState());
		System.out.println("Etat du Thread " + T3.getNom() + " : " + T3.getState());
	}
}