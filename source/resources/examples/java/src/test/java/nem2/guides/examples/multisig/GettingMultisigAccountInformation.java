package nem2.guides.examples.multisig;

import io.nem.sdk.api.MultisigRepository;
import io.nem.sdk.api.RepositoryFactory;
import io.nem.sdk.infrastructure.vertx.RepositoryFactoryVertxImpl;
import io.nem.sdk.model.account.Address;
import io.nem.sdk.model.account.MultisigAccountInfo;
import java.util.concurrent.ExecutionException;
import org.junit.jupiter.api.Test;

public class GettingMultisigAccountInformation {


    @Test
    void gettingMultisigAccountInformation()
        throws ExecutionException, InterruptedException {

        /* start block 01 */
        try (final RepositoryFactory repositoryFactory = new RepositoryFactoryVertxImpl(
            "http://localhost:3000")) {

            final MultisigRepository multisigRepository = repositoryFactory
                .createMultisigRepository();

            // Replace with address
            final String addressRaw = "SB2RPH-EMTFMB-KELX2Y-Q3MZTD-RV7DQG-UZEADV-CYKC";

            final Address address = Address.createFromRawAddress(addressRaw);

            final MultisigAccountInfo multisigAccountInfo = multisigRepository
                .getMultisigAccountInfo(address).toFuture().get();

            System.out.println(multisigAccountInfo);
            /* end block 01 */
        }

    }
}
