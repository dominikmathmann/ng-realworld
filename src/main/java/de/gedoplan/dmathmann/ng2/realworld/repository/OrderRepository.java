package de.gedoplan.dmathmann.ng2.realworld.repository;

import de.gedoplan.dmathmann.ng2.realworld.model.Order;
import de.gedoplan.dmathmann.ng2.realworld.model.Shipper;
import javax.enterprise.context.RequestScoped;
import javax.transaction.Transactional;

@RequestScoped
public class OrderRepository extends BasicRepository<Order, Integer> {

    public OrderRepository() {
        super(Order.class);
    }
    
    @Transactional(Transactional.TxType.REQUIRED)
    public void assignShipperToOrder(Integer orderId, Integer shipperId){
        Shipper shipperReference = this.getEntityManager().getReference(Shipper.class, shipperId);
        Order order = this.findById(orderId);
        order.setShipVia(shipperReference);
        merge(order);
    }

}
