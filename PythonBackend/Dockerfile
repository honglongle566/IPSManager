FROM apache/superset

USER root

COPY ./setup.sh .

RUN pip install 'elasticsearch-dbapi==0.2.2'

RUN chmod +x ./setup.sh

USER superset
