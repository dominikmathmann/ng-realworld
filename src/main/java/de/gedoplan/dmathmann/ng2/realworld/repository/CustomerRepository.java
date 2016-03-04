
package de.gedoplan.dmathmann.ng2.realworld.repository;

import de.gedoplan.dmathmann.ng2.realworld.model.Customer;
import javax.enterprise.context.RequestScoped;

@RequestScoped
public class CustomerRepository extends BasicRepository<Customer, String>{

    public CustomerRepository() {
        super(Customer.class);
    }

}
