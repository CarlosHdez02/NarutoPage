export interface characterInterface{
    id: string;
    name:string;
    images:string;
    debut:{};
    personal:{};
    jutsu:[];
    natureType:[];
    uniqueTraits:[]
    voiceActors?:{}
}
export interface tailedBeastInterface extends characterInterface{}
export interface akatasukiInterface extends characterInterface{}

export interface teamInterface{
    id:string;
    name:string;
    character:[]
}




