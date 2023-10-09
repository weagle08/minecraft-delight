FROM itzg/minecraft-bedrock-server:latest
ENV EULA=true
ENV DIFFICULTY=hard
ENV PLAYER_IDLE_TIMEOUT=0
COPY ./world_resource_packs.json /data/worlds/minecraft-delight/world_resource_packs.json
