@echo off
(
echo [ca]
echo default_ca = CA_default
echo[
echo [CA_default]
echo new_certs_dir = ./new_certs
echo database = index.txt
echo serial   = serial.dat
echo[
echo private_key = ca.key.pem
echo certificate = ca.crt.pem
echo[
echo policy = policy_catapult
echo[
echo [policy_catapult]
echo commonName              = supplied
echo[
echo [req]
echo prompt = no
echo distinguished_name = dn
echo[
echo [dn]
echo CN = peer-node-1-account
)>ca.cnf

(
echo [req]
echo prompt = no
echo distinguished_name = dn
echo[
echo [dn]
echo CN = peer-node-1
)>node.cnf

mkdir new_certs
type nul > index.txt

rem create CA key
openssl genpkey -out ca.key.pem -outform PEM -algorithm ed25519
openssl pkey -inform pem -in ca.key.pem -text -noout
openssl pkey -in ca.key.pem -pubout -out ca.pubkey.pem

rem create CA cert and self-sign it
openssl req -config ca.cnf -keyform PEM -key ca.key.pem -new -x509 -days 7300 -out ca.crt.pem
openssl x509 -in ca.crt.pem  -text -noout


rem create node key
openssl genpkey -out node.key.pem -outform PEM -algorithm ed25519
openssl pkey -inform pem -in node.key.pem -text -noout

rem create request
openssl req -config node.cnf -key node.key.pem -new -out node.csr.pem
openssl req  -text -noout -verify -in node.csr.pem

rem CA side
rem create serial
openssl rand -hex 19 > ./serial.dat

rem sign cert for 375 days
openssl ca -config ca.cnf -days 375 -notext -in node.csr.pem -out node.crt.pem

openssl verify -CAfile ca.crt.pem node.crt.pem

rem finally create full crt
copy node.crt.pem + ca.crt.pem node.full.crt.pem

rem remove leftover files
del ca.cnf ca.key.pem index.txt index.txt.attr index.txt.old node.cnf node.csr.pem serial.dat serial.dat.old
rmdir /s /q new_certs
