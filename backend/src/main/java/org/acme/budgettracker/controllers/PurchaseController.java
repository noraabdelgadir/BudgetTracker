package org.acme.budgettracker.controllers;

import org.acme.budgettracker.models.Purchase;
import org.acme.budgettracker.repositories.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/")
public class PurchaseController {
	@Autowired
	private PurchaseRepository purchaseRepository;

	@PostMapping("/purchases") // Map ONLY POST Requests
	public @ResponseBody Purchase addNewPurchase(@RequestBody Purchase purchase) {
		purchaseRepository.save(purchase);
		return purchase;
	}

	@GetMapping("/purchases")
	public @ResponseBody Iterable<Purchase> getAllPurchases() {
		// This returns a JSON or XML with the purchases
		return purchaseRepository.findAll();
	}
}
