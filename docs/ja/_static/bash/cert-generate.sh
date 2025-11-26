cat <<EOF>ca.cnf
[ca]
default_ca = CA_default

[CA_default]
new_certs_dir = ./new_certs
database = index.txt
serial   = serial.dat

private_key = ca.key.pem
certificate = ca.crt.pem

policy = policy_catapult

[policy_catapult]
commonName              = supplied

[req]
prompt = no
distinguished_name = dn

[dn]
CN = peer-node-1-account
EOF

cat <<EOF> node.cnf
[req]
prompt = no
distinguished_name = dn

[dn]
CN = peer-node-1
EOF

mkdir new_certs && chmod 700 new_certs
touch index.txt

# create CA key
echo "302e020100300506032b657004220420"`cat private.main.txt` | xxd -r -p | openssl pkey -inform DER -out ca.key.pem
openssl pkey -inform pem -in ca.key.pem -text -noout
openssl pkey -in ca.key.pem -pubout -out ca.pubkey.pem

# create CA cert and self-sign it
openssl req -config ca.cnf -keyform PEM -key ca.key.pem -new -x509 -days 7300 -out ca.crt.pem
openssl x509 -in ca.crt.pem  -text -noout


# create node key
openssl genpkey -out node.key.pem -outform PEM -algorithm ed25519
openssl pkey -inform pem -in node.key.pem -text -noout

# create request
openssl req -config node.cnf -key node.key.pem -new -out node.csr.pem
openssl req  -text -noout -verify -in node.csr.pem

# CA side
# create serial
openssl rand -hex 19 > ./serial.dat

# sign cert for 375 days
openssl ca -config ca.cnf -days 375 -notext -in node.csr.pem -out node.crt.pem

openssl verify -CAfile ca.crt.pem node.crt.pem

# finally create full crt
cat node.crt.pem ca.crt.pem > node.full.crt.pem

# remove leftover files
rm ca.cnf ca.key.pem index.txt index.txt.attr index.txt.old node.cnf node.csr.pem serial.dat serial.dat.old
rm -rf new_certs
