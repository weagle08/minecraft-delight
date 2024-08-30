import { world, system } from '@minecraft/server';
import { IPlayerInfo } from './i-player-info';

let players: IPlayerInfo[] = [];

async function mainTick() {
    let current = system.currentTick;

    if (current % 20 == 0) {
        let worldPlayers = world.getAllPlayers();

        for (let player of worldPlayers) {
            let found = players.find((pi) => pi.playerId == player.id);
            if (found == null) {
                players.push({
                    playerId: player.id,
                    prevLocation: player.location
                });
            } else {
                let currentLocation = player.location;
                let diff = Math.sqrt(Math.pow(currentLocation.x - found.prevLocation.x, 2) + Math.pow(currentLocation.y - found.prevLocation.y, 2) + Math.pow(currentLocation.z - found.prevLocation.z, 2));
                diff = Math.round(diff * 10) / 10;
                // since we are measuring at 20 ticks (1 sec) the distance is m/s
                if (diff > 0) {
                    player.sendMessage(`Speed: ${diff} m/s`);
                }
                found.prevLocation = currentLocation;
            }
        }
    }

    system.run(mainTick);
}
system.run(mainTick);