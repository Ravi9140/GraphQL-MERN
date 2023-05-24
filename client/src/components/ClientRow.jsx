import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";
import { GET_PROJECTS } from "../queries/projectQueries";

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }], //Approach 1: not optimal

    //Approach 2:  Updating the Cache
    // In Console: Warning: Cache data may be lost when replacing the clients field of a Query object.
    // To address this problem (which is not a bug in Apollo Client),
    // define a custom merge function for the Query.clients field,
    // so InMemoryCache can safely merge these objects:

    //To get rid of this warning we have added code in App.js
    // update(cache, { data: { deleteClient } }) {
    //   const { clients } = cache.readQuery({ query: GET_CLIENTS });
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       clients: clients.filter((client) => client.id !== deleteClient.id),
    //     },
    //   });
    // },
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        {/* After clicking on button, the daata in the database will be changed but will 
            not be reflected on the frontend. To do that there are 2 Approaches
            Approach 1:  Refetch the Query using refetchQueries (Non optimal)
            Approach 2: Update the Cache (Optimal Solution)*/}
        <button className="btn btn-danger btn-sm" onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
