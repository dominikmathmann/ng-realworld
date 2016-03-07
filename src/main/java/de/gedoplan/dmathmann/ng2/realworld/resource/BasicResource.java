package de.gedoplan.dmathmann.ng2.realworld.resource;

import com.fasterxml.jackson.annotation.JsonView;
import de.gedoplan.dmathmann.ng2.realworld.dto.QueryResult;
import de.gedoplan.dmathmann.ng2.realworld.dto.QuerySettings;
import de.gedoplan.dmathmann.ng2.realworld.repository.BasicRepository;
import de.gedoplan.dmathmann.ng2.realworld.resource.views.ListView;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;

public interface BasicResource {

    @GET
    @Path("/query")
    @JsonView(ListView.class)
    public default QueryResult query(
            @QueryParam("max") Integer max,
            @QueryParam("start") Integer start,
            @QueryParam("sortAttributes") String sortAttributes[],
            @QueryParam("sortDirections") String sortDirections[]) {

        QuerySettings settings = new QuerySettings(start, max, sortAttributes, sortDirections);
        return getRepository().search(settings);
    }

    public BasicRepository getRepository();
}
