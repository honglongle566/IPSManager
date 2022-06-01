# How to run
* Build opensearch-dbapi by `python -m build opensearch-dbapi`
* Copy `opensearch-dbapi/dist/<name>.tar.gz` to `superset` folder, ie `cp opensearch-dbapi/dist/elasticsearch-dbapi-0.2.9.tar.gz ./superset`
* Edit `superset/Dockerfile`, in the `COPY` and `RUN` lines to match `<name>`
* `docker compose build`
* `docker compose up`
* After sucessfully boot up, go to superset terminal by `docker exec -it <container_id> /bin/bash`(get `container_id` from `docker ps`), and `./setup.sh`, wait for it to finish
* Create a tunnel to publish localhost: `ngrok http 8088 --scheme=https`

# How to stop
* `docker compose down`