package nem2.guides.examples.multisig;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import io.nem.sdk.api.MultisigRepository;
import io.nem.sdk.api.RepositoryFactory;
import io.nem.sdk.infrastructure.vertx.RepositoryFactoryVertxImpl;
import io.nem.sdk.model.account.Address;
import io.nem.sdk.model.account.MultisigAccountInfo;
import java.util.concurrent.ExecutionException;
import org.junit.jupiter.api.Test;

public class GettingMultisigAccountCosignatories {


    @Test
    void gettingMultisigAccountCosignatories()
        throws ExecutionException, InterruptedException {

        /* start block 01 */
        // replace with node endpoint
        try (final RepositoryFactory repositoryFactory = new RepositoryFactoryVertxImpl(
            "http://api-xym-harvest-20.us-west-1.nemtech.network:3000")) {

            final MultisigRepository multisigRepository = repositoryFactory
                .createMultisigRepository();

            // replace with multisig address
            final String rawAddress = "TAEG6L-KWXRA7-PSWUEE-ILQPG4-3V5CYZ-S5652T-JTUU";
            final Address address = Address.createFromRawAddress(rawAddress);

            final MultisigAccountInfo multisigAccountInfo = multisigRepository
                .getMultisigAccountInfo(address).toFuture().get();

            final Gson gson = new GsonBuilder().setPrettyPrinting().serializeNulls().create();
            System.out.println(gson.toJson(multisigAccountInfo));
            /* end block 01 */
        }

    }
}
