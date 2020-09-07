package org.acme.budgettracker.models;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;
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
    private Map<String, BigDecimal> budget;

    public Budget() {
		
	}
    
    public void setTotal(BigDecimal total) {
		this.total = total;
	}

	public BigDecimal getTotal() {
		return total;
    }
    
    public void setBudget(Map<String, BigDecimal> budget) {
		this.budget = budget;
	}

	public Map<String, BigDecimal> getBudget() {
		return budget;
	}
}
