export interface PartsSupplier {
    fetchParts: (query: string) => Promise<Device[]>;
    authenticate?: () => Promise<void>;
}

export type OperationResult = {
    IsSuccessful: boolean;
    ErrorMessage: string;
};

export type Device = {
    id: string;
    name: string;
    type: string;
    Hersteller: string; 
    Artikelanzahl: number;
};