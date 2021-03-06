package de.gedoplan.dmathmann.ng2.realworld.resource;

import de.gedoplan.dmathmann.ng2.realworld.repository.BasicRepository;
import de.gedoplan.dmathmann.ng2.realworld.repository.CustomerRepository;
import javax.inject.Inject;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/customer")
@Produces(MediaType.APPLICATION_JSON)
public class CustomerResource implements BasicResource {

    @Inject
    CustomerRepository customerRepository;

    @Override
    public BasicRepository getRepository() {
        return customerRepository;
    }

}
