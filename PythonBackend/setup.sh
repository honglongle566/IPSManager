#!/usr/bin/env bash
echo "SSSSS STEP 1 SSSSS"
superset fab create-admin \
            --username admin \
            --firstname Superset \
            --lastname Admin \
            --email admin@superset.com \
            --password admin

echo "SSSSS STEP 2 SSSSS"

superset db upgrade

#echo "SSSSS STEP 3 SSSSS"

#superset load_examples

echo "SSSSS STEP 4 SSSSS"

superset init

echo "SSSSS DONE SSSSS"