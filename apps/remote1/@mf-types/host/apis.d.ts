
    export type RemoteKeys = 'host/context';
    type PackageType<T> = T extends 'host/context' ? typeof import('host/context') :any;