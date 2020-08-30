package org.acme.budgettracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// @ComponentScan(basePackages={"org.acme.budgettracker.*"})
// @RestController
@EnableJpaRepositories
// ("org.acme.budgettracker.repositories")
@SpringBootApplication
public class BudgettrackerApplication {

	// @RequestMapping(value = "/available")
	// public String available() {
	// 	return "Spring in Action";
	// }

	// @RequestMapping(value = "/checked-out")
	// public String checkedOut() {
	// 	return "Spring Boot in Action";
	// }

	public static void main(String[] args) {
		SpringApplication.run(BudgettrackerApplication.class, args);
	}

}
