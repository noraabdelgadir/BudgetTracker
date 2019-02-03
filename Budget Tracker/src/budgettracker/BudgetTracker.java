package budgettracker;

import javax.swing.BoxLayout;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

import java.awt.Color;
import java.awt.Component;

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
		main.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
//		main.setVisible(true);
		setup();
		setup.setVisible(true);
	}
	
	public JFrame setup() {
		setup.setSize(600, 600);
		setup.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		JPanel panel = new JPanel();
		panel.setLayout(new BoxLayout(panel, BoxLayout.PAGE_AXIS));
		panel.setBackground(Color.pink);
		
		JLabel title = new JLabel("Set up your account");
		title.setFont(title.getFont().deriveFont(20f));
		title.setAlignmentX(Component.CENTER_ALIGNMENT);
		JPanel namePane = new JPanel();
		JLabel name = new JLabel("Name: ");
		JTextField nameField = new JTextField(20);
		namePane.add(name);
		namePane.add(nameField);
		JPanel savingsPane = new JPanel();
		JLabel savings = new JLabel("Current savings: ");
		JTextField savingsField = new JTextField(20);
		savingsPane.add(savings);
		savingsPane.add(savingsField);
		JButton enter = new JButton("Next");
		
		panel.add(title);
		panel.add(namePane);
		panel.add(savingsPane);
		panel.add(enter);
		
		setup.add(panel);
		
		return setup;
	}

	public static void main(String[] args) {
		new BudgetTracker();
	}

}
