package org.acme.budgettracker.controllers;

import org.acme.budgettracker.models.Budget;
import org.acme.budgettracker.repositories.BudgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/")
public class BudgetController {
    @Autowired
	private BudgetRepository budgetRepository;

	@PostMapping("/budgets")
	public @ResponseBody Budget addNewBudget(@RequestBody Budget budget) {
		budgetRepository.save(budget);
		return budget;
	}

	@GetMapping("/budgets")
	public @ResponseBody Iterable<Budget> getAllBudgets() {
		return budgetRepository.findAll();
	}
}
