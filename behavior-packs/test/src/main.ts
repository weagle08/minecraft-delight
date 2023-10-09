import { world, system, Entity } from '@minecraft/server';

const SUNSET = 12000;
const SUNRISE = 23000;
const FULL_DAY = 24000;

async function mainTick() {
    let current = system.currentTick;

    if (current % 100 == 0) {
        // try {
        //     let players = world.getAllPlayers();
        //     for (let player of players) {
        //         console.log(player.name);
        //     }
        // } catch (ex) {
        //     console.log('get all players failed');
        // }

        try {
            let tod = world.getTimeOfDay();
            let players = world.getAllPlayers();
            for (let player of players) {
                for (let effect of player.getEffects()) {
                    world.sendMessage(`${player.name} has effect ${effect.typeId} for ${effect.duration} ticks`);
                }
            }
            world.sendMessage(`time of day: ${tod}`);
        } catch (ex) {

        }

        // world.sendMessage(`tick time: ${current}  absolute time: ${}`);

        // let overworld = world.getDimension('overworld');
        // if (overworld != null) {
        //     let foo = overworld.runCommand('time query daytime');
        //     world.sendMessage(foo.successCount.toString());
        //     for (let k of Object.keys(foo)) {
        //         console.log((foo as any)[k]);
        //     }

        // }

        // world.sendMessage(`current tick: ${current} shifted: ${shifted}`);
        // for (let player of world.getAllPlayers()) {
        //     // world.sendMessage('COMPONENTS:');
        //     // for (let component of player.getComponents()) {
        //     //     world.sendMessage(component.typeId);
        //     // }
        //     world.sendMessage('TAGS:');

        //     for (let tag of player.getTags()) {
        //         world.sendMessage(tag);
        //     }
        // }
        // world.getDimension('overworld').runCommandAsync('time add 11000');
    }

    system.run(mainTick);
}

// system.run(() => {
//     let overworld = world.getDimension('overworld');
//     overworld.runCommandAsync()

// });
system.run(mainTick);