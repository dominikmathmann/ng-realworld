
package de.gedoplan.dmathmann.ng2.realworld.repository;

import de.gedoplan.dmathmann.ng2.realworld.model.Shipper;
import javax.enterprise.context.RequestScoped;

@RequestScoped
public class ShipperRepository extends BasicRepository<Shipper, Integer>{
    
    public ShipperRepository() {
        super(Shipper.class);
    }
}
