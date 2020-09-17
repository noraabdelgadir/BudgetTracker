package org.acme.budgettracker.models;

import java.math.BigDecimal;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Budget {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private BigDecimal total;
	private BudgetMap budget;

	public Budget() {

	}

	public void setTotal(BigDecimal total) {
		this.total = total;
	}

	public BigDecimal getTotal() {
		return total;
	}

	public void setBudget(BudgetMap budget) {
		this.budget = budget;
	}

	public BudgetMap getBudget() {
		return budget;
	}
}
