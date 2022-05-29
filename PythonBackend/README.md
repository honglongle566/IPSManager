# How to run
* Build opensearch-dbapi by `python -m build opensearch-dbapi`
* Copy `opensearch-dbapi/dist/<name>.tar.gz` to `superset` folder
* Edit `superset/Dockerfile`, in the `COPY` and `RUN` lines to match `<name>`
* `docker compose build`
* `docker compose up`

# How to stop
* `docker compose down`