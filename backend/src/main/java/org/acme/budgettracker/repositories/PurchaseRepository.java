package org.acme.budgettracker.repositories;

import org.acme.budgettracker.models.Purchase;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Repository
public interface PurchaseRepository extends CrudRepository<Purchase, Integer> {

}
