export interface AvaliacaoDTO{
    id        : Int32Array;
    name      : string;
    dateStart : string;
    dateEnd   : string;
    open      : boolean;
    concept   : Int16Array;
    feedback  : string;
}