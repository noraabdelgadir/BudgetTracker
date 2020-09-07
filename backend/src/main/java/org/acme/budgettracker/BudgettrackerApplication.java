package org.acme.budgettracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
@SpringBootApplication
public class BudgetTrackerApplication {
	public static void main(String[] args) {
		SpringApplication.run(BudgetTrackerApplication.class, args);
	}
}
