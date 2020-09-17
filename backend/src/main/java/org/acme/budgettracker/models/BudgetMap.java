package org.acme.budgettracker.models;

import java.math.BigDecimal;
import java.util.Map;

public class BudgetMap {
    private Map<String, BigDecimal> attrs;

    public Map<String, BigDecimal> getAttrs() {
        return attrs;
    }

    public void setAttrs(Map<String, BigDecimal> attrs) {
        this.attrs = attrs;
    }
}