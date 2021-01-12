export interface IGPSelement {
    Longitude: number;
    Latitude: number;
    Altitude: number;
    Angle: number;
    Satellites: number;
    Speed: number;
}
export declare function isIGPSelement(obj: any): obj is IGPSelement;
export interface IpoiMov extends IGPSelement {
    Timestamp: Date;
}
export interface IpoiStop extends IGPSelement {
    Timestamp: Date;
    IdInstallation: number;
    DeviceIMEI: string;
    StopDuration: number;
    MovDuration: number;
    MovDistance: number;
    POImov: IpoiMov[];
    POImatch: number[];
}
