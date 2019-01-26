package budgettracker;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import java.awt.Color;

public class BudgetTracker {
	
	JFrame main = new JFrame("Budget Tracker");
	JFrame setup = new JFrame("Get started");
	
	public BudgetTracker() {
		main.setSize(600, 600);
		JPanel panel = new JPanel();
		JLabel title = new JLabel("Budget Tracker");
		panel.setBackground(Color.white);
		panel.add(title);
		main.add(panel);
		main.setVisible(true);
	}
	
	public JFrame setup() {
		return setup;	
	}

	public static void main(String[] args) {
		new BudgetTracker();
	}

}
