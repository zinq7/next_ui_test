export interface QuestionInfo {
    icon?: string,
    border_arts?: string,
    importance?: number,
    min_val?: number,
    max_val?: number,
    step?: number,
    messages?: LifeStatMessage[],
    description?: string,
    color_accent?: string
}

export interface LifeStatProps extends QuestionInfo {
    stateControl: any, // not an any but idk type
    isUpdated: any // ^
}

export interface LifeStatMessage {
    start_val: number,
    end_val?: number,
    message: string,
    rarity?: number
}