//package td01;

public class Ex01 extends Thread {
	
	public static void afficher(int I) {
		for (int i=0; i<100 ; i++) {
			System.out.println(I + i);
			try {
				Thread.sleep(500);
			} catch(InterruptedException ex) {
			    Thread.currentThread().interrupt();
			}
			
		}
	}

	public static void main(String[] args) {
		afficher(Integer.parseInt(args[0]));
	}
}