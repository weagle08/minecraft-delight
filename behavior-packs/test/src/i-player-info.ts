import { Player, Vector3 } from '@minecraft/server';

export interface IPlayerInfo {
    playerId: string;
    prevLocation: Vector3;
}