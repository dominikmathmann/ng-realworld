package de.gedoplan.dmathmann.ng2.realworld.resource;

import de.gedoplan.dmathmann.ng2.realworld.repository.BasicRepository;
import de.gedoplan.dmathmann.ng2.realworld.repository.ShipperRepository;
import javax.inject.Inject;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/shipper")
@Produces(MediaType.APPLICATION_JSON)
public class ShipperResource implements BasicResource {

    @Inject
    ShipperRepository shipperRepository;

    @Override
    public BasicRepository getRepository() {
        return shipperRepository;
    }

}
