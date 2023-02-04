import { Vector2 } from "../../math/Vector2";
import { Rect } from "../../math/Rect";
import { Renderer } from "../../renderers/Renderer";
import { Game } from "../common/Game";
export declare class TetrisBoard implements Game {
    private renderer;
    private boardArea;
    private holdArea;
    private lineClearDelayMS;
    private maxPlayerLevel;
    private linesPerLevel;
    private state;
    private board;
    private nextPieces;
    private currentPiece?;
    private holdPiece?;
    private pieceSpawnArea;
    private canSwapHoldPiece;
    private playerLevel;
    private linesToNextLevel;
    private interval?;
    private inputAbortController?;
    constructor(renderer: Renderer, boardArea?: Rect, holdArea?: Rect, lineClearDelayMS?: number, maxPlayerLevel?: number, linesPerLevel?: number);
    query(position: Vector2): boolean;
    startGame(): Promise<void>;
    stopGame(): void;
    private refreshUpdateInterval;
    private update;
    private draw;
    private handleInput;
    private getNextPiece;
    private dropCurrentPiece;
    private placeCurrentPiece;
    private clearLinesWithAnimation;
    private testLineClear;
    private copyLine;
    private emptyLine;
}
