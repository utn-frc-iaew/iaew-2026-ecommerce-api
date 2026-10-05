FROM alpine:3.22.1
ARG TARGETARCH
ADD https://github.com/google/cadvisor/releases/download/v0.60.6/cadvisor-v0.60.6-linux-${TARGETARCH} /usr/bin/cadvisor
RUN case "$TARGETARCH" in \
      amd64) checksum=c381c2c911bc43d465d1e0eaff60f96d58c031c409bddf06da0316fdde8a9296 ;; \
      arm64) checksum=d788162d9deea8aa024fd79a0a685df90a987362d8f0e580f822474c1fbef7f9 ;; \
      *) exit 1 ;; \
    esac && echo "$checksum  /usr/bin/cadvisor" | sha256sum -c - && chmod +x /usr/bin/cadvisor
EXPOSE 8080
HEALTHCHECK --interval=5s --timeout=3s CMD wget -q -O /dev/null http://localhost:8080/healthz || exit 1
ENTRYPOINT ["/usr/bin/cadvisor"]
