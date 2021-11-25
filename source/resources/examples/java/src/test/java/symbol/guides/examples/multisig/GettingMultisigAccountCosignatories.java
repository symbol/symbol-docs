package symbol.guides.examples.multisig;

import io.nem.symbol.sdk.api.MultisigRepository;
import io.nem.symbol.sdk.api.RepositoryFactory;
import io.nem.symbol.sdk.infrastructure.vertx.JsonHelperJackson2;
import io.nem.symbol.sdk.infrastructure.vertx.RepositoryFactoryVertxImpl;
import io.nem.symbol.sdk.model.account.Address;
import io.nem.symbol.sdk.model.account.MultisigAccountInfo;
import io.nem.symbol.sdk.model.transaction.JsonHelper;
import org.junit.jupiter.api.Test;

import java.util.concurrent.ExecutionException;

public class GettingMultisigAccountCosignatories {


    @Test
    void gettingMultisigAccountCosignatories()
        throws ExecutionException, InterruptedException {

        /* start block 01 */
        // replace with node endpoint
        try (final RepositoryFactory repositoryFactory = new RepositoryFactoryVertxImpl(
            "NODE_URL")) {

            final MultisigRepository multisigRepository = repositoryFactory
                .createMultisigRepository();

            // replace with multisig address
            final String rawAddress = "TAEG6L-KWXRA7-PSWUEE-ILQPG4-3V5CYZ-S5652T-JTUU";
            final Address address = Address.createFromRawAddress(rawAddress);

            final MultisigAccountInfo multisigAccountInfo = multisigRepository
                .getMultisigAccountInfo(address).toFuture().get();

            final JsonHelper helper = new JsonHelperJackson2();
            System.out.println(helper.prettyPrint(multisigAccountInfo));
            /* end block 01 */
        }

    }
}
