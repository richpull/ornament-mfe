
    export type RemoteKeys = 'remote1/WithProvider';
    type PackageType<T> = T extends 'remote1/WithProvider' ? typeof import('remote1/WithProvider') :any;