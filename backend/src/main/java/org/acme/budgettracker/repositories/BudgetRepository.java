package org.acme.budgettracker.repositories;

import org.acme.budgettracker.models.Budget;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BudgetRepository extends CrudRepository<Budget, Long> {

}
