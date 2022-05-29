FROM apache/superset

USER root

COPY ./setup.sh .

COPY ./elasticsearch-dbapi-0.2.9.tar.gz .

RUN pip install ./elasticsearch-dbapi-0.2.9.tar.gz

#RUN pip install elasticsearch-dbapi

RUN chmod +x ./setup.sh

USER superset
