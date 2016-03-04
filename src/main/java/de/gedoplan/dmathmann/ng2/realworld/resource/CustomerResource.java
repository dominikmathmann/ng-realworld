package de.gedoplan.dmathmann.ng2.realworld.resource;

import com.fasterxml.jackson.annotation.JsonView;
import de.gedoplan.dmathmann.ng2.realworld.dto.QueryResult;
import de.gedoplan.dmathmann.ng2.realworld.dto.QuerySettings;
import de.gedoplan.dmathmann.ng2.realworld.repository.CustomerRepository;
import de.gedoplan.dmathmann.ng2.realworld.resource.views.ListView;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

@Path("/customer")
@Produces(MediaType.APPLICATION_JSON)
public class CustomerResource {

    @Inject
    CustomerRepository customerRepository;

    @GET
    @JsonView(ListView.class)
    public QueryResult getCustomer(
            @QueryParam("max") Integer max,
            @QueryParam("start") Integer start,
            @QueryParam("sortAttributes") String sortAttributes[],
            @QueryParam("sortDirections") String sortDirections[]) {

        QuerySettings settings = new QuerySettings(start, max, sortAttributes, sortDirections);
        return customerRepository.search(settings);
    }
}
