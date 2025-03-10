# minecraft-delight
minecraft bedrock server settings for private server

# about
- default container: 
    - https://hub.docker.com/r/itzg/minecraft-bedrock-server

# tips
- running commands for game rules:  
    - docker attach [container name]  
    - gamerule [name] [value]

    - examples:
        - setworldspawn 0 0 0
        - gamerule showcoordinates true
        - gamerule playersSleepPercentage 0

# OLD tips (in the in-game chat type the following)
- turn on coordinates: `/gamerule showcoordinates true`
- turn on 1 player sleep: `/gamerule playersSleepingPercentage 0`
- allow cheats: `/changesetting allow-cheats true`

## loading resource
- cd to worlds/[my-world]
- create a worlds/[my-world]/world_resource_packs.json file
- copy your resource pack to either the world/[my-world]/resource_packs or to the top level resource_packs dir
- add the resource packs header UUID and version to the world_resource_packs.json file

## loading behavior
How I run scripts on bedrock server hosted on Ubuntu Server 22.04:

- cd to your worlds/[my-world]
- create a behavior_packs directory
- copy your custom script behavior pack into this behavior_packs directory ex: worlds/[my-world]/behavior_packs/[my-custom-behavior-directory]
- create a file at the top level of your world called world_behavior_packs.json ex: worlds/[my-world]/world_behavior_packs.json
- add the UUID of your custom behavior pack to this json... will looks something like:  
```
[
    {
        "pack_id": "[your-beahvior-uuid]",
        "version": [0,0,1]
    }
]
```

- restart your server, you should see your custom scripts run, any errors will print to the console  

**NOTE: it seems your scripts have to be in a scripts directory no matter where your manifest.json says they are**


{
  "allowed_modules": [
    "@minecraft/server-gametest",
    "@minecraft/server",
    "@minecraft/server-ui",
    "@minecraft/server-admin",
    "@minecraft/server-editor"
  ]
}

[
  {
    "permission": "operator",
    "xuid": "2623078711549468"
  }
]

# to enable Beta API
- copy level.dat
- use NBT Viewer
    - set "saved_with_toggled_experiments 1"
    - add "gametest 1" (byte)

# Canopy notes
- After getting canopy setup on the server, to enable the statistics plugin, must give CanopyAdmin
  - /tag @a add CanopyAdmin (seems user must be in game in order to apply this tag)