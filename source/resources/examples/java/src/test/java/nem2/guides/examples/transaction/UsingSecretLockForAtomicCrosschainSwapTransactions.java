/*
 *
 * Copyright 2018 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

package nem2.guides.examples.transaction;

import io.nem.core.crypto.Hashes;
import io.nem.sdk.infrastructure.TransactionHttp;
import io.nem.sdk.model.account.Account;
import io.nem.sdk.model.account.Address;
import io.nem.sdk.model.blockchain.NetworkType;
import io.nem.sdk.model.mosaic.Mosaic;
import io.nem.sdk.model.mosaic.MosaicId;
import io.nem.sdk.model.mosaic.XEM;
import io.nem.sdk.model.transaction.*;
import org.apache.commons.codec.binary.Hex;
import org.junit.jupiter.api.Test;

import java.math.BigInteger;
import java.net.MalformedURLException;
import java.util.Collections;
import java.util.Random;
import java.util.concurrent.ExecutionException;

import static java.time.temporal.ChronoUnit.HOURS;

class UsingSecretLockForAtomicCrosschainSwapTransactions {

    @Test
    void usingSecretLockForAtomicCrosschainSwapTransactions() throws ExecutionException, InterruptedException, MalformedURLException {

        // Alice is a PUBLIC net user
        final String alicePrivateKey = "";
        final Account aliceAccount = Account.createFromPrivateKey(alicePrivateKey, NetworkType.MAIN_NET);

        // Alice picks a random number and hashes it.
        final byte[] secretBytes = new byte[20];
        new Random().nextBytes(secretBytes);
        final byte[] result = Hashes.sha3_512(secretBytes);
        final String secret = Hex.encodeHexString(result);
        final String proof = Hex.encodeHexString(secretBytes);

        // Alice creates creates TX1 SecretLockTransaction{ H(x), B, MosaicId, Amount, valid for 96h }
        final SecretLockTransaction tx1 = SecretLockTransaction.create(
                new Deadline(2, HOURS),
                new Mosaic(new MosaicId("alice:token"), BigInteger.valueOf(10)),
                BigInteger.valueOf(96 * 60), //assume one block per minute
                HashType.SHA3_512,
                secret,
                Address.createFromRawAddress("NDG4WG-FS7EQJ-KFQKXM-4IUCQG-PXUW5H-DJVIJB-OXJG"),
                NetworkType.MAIN_NET
        );

        // Alice sends TX1 to network (PUBLIC)
        final SignedTransaction tx1Signed = aliceAccount.sign(tx1);
        final TransactionHttp transactionHttp = new TransactionHttp("http://localhost:3000");
        transactionHttp.announce(tx1Signed).toFuture().get();

        // Bob is a PRIVATE network user
        final String bobPrivateKey = "";
        final Account bobAccount = Account.createFromPrivateKey(bobPrivateKey, NetworkType.MIJIN);

        // B creates TX2 SecretLockTransaction{ H(x), A, MosaicId, Amount, valid for 84h }
        final SecretLockTransaction tx2 = SecretLockTransaction.create(
                new Deadline(2, HOURS),
                new Mosaic(new MosaicId("bob:token"), BigInteger.valueOf(10)),
                BigInteger.valueOf(84 * 60), //assume one block per minute
                HashType.SHA3_512,
                secret,
                Address.createFromRawAddress("MD5DT3-CH4BLA-BL5HIM-EKP2TA-PUKF4N-Y3L5HR-IR54"),
                NetworkType.MIJIN
        );

        // Bob sends TX2 to network (PRIVATE)
        final SignedTransaction tx2Signed = bobAccount.sign(tx2);
        transactionHttp.announce(tx2Signed).toFuture().get();

        // Alice spends TX2 transaction by sending SecretProofTransaction (in PRIVATE network)
        SecretProofTransaction tx3 = SecretProofTransaction.create(
                new Deadline(2, HOURS),
                HashType.SHA3_512,
                secret,
                proof,
                NetworkType.MIJIN
        );

        final SignedTransaction tx3Signed = aliceAccount.sign(tx3);
        transactionHttp.announce(tx3Signed).toFuture().get();

        // Bob spends TX1 transaction by sending SecretProofTransaction (in PUBLIC network)
        SecretProofTransaction tx4 = SecretProofTransaction.create(
                new Deadline(2, HOURS),
                HashType.SHA3_512,
                secret,
                proof,
                NetworkType.MAIN_NET
        );


        final SignedTransaction tx4Signed = aliceAccount.sign(tx4);
        transactionHttp.announce(tx4Signed).toFuture().get();
    }
}
