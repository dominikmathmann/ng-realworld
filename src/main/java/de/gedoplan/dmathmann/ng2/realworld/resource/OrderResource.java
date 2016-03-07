package de.gedoplan.dmathmann.ng2.realworld.resource;

import de.gedoplan.dmathmann.ng2.realworld.dto.OrderShipperMapping;
import de.gedoplan.dmathmann.ng2.realworld.repository.BasicRepository;
import de.gedoplan.dmathmann.ng2.realworld.repository.OrderRepository;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/order")
@Produces(MediaType.APPLICATION_JSON)
public class OrderResource implements BasicResource {

    @Inject
    OrderRepository orderRepository;

    @Override
    public BasicRepository getRepository() {
        return orderRepository;
    }

    @POST
    @Path("assign")
    @Consumes(MediaType.APPLICATION_JSON)
    public void assignShipper(OrderShipperMapping mapping) {
        orderRepository.assignShipperToOrder(mapping.getOrderID(), mapping.getShipperID());
    }

}
